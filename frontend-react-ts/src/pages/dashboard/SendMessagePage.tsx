import { useState, useEffect } from 'react';
import { CREATE_MESSAGE_URL, USERNAMES_LIST_URL } from '../../utils/globalConfig';
import axiosInstance from '../../utils/axiosInstance';
import { toast } from 'react-hot-toast';
import Spinner from '../../components/general/Spinner';
import UsernamesComboBox from '../../components/dashboard/send-message/UsernamesComboBox';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ISendMessageDto } from '../../types/message.types';
import InputField from '../../components/general/InputField';
import Button from '../../components/general/Button';
import { useNavigate } from 'react-router-dom';
import { PATH_DASHBOARD } from '../../routes/paths';

const SendMessagePage = () => {
  const [usernames, setUsernames] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const sendMessageSchema = Yup.object().shape({
    receiverUserName: Yup.string().required('User Name is required').oneOf(usernames, 'Invalid username'),
    text: Yup.string().required('Message Text is required'),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ISendMessageDto>({
    resolver: yupResolver(sendMessageSchema),
    defaultValues: {
      receiverUserName: '',
      text: '',
    },
  });

  const getUsernamesList = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get<string[]>(USERNAMES_LIST_URL);
      const { data } = response;
      setUsernames(data);
      setLoading(false);
    } catch (error) {
      toast.error('An Error happened. Please Contact admins');
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsernamesList();
  }, []);

  const onSubmitSendMessageForm = async (submittedData: ISendMessageDto) => {
    try {
      setLoading(true);
      const newMessage: ISendMessageDto = {
        receiverUserName: submittedData.receiverUserName,
        text: submittedData.text,
      };
      await axiosInstance.post(CREATE_MESSAGE_URL, newMessage);
      setLoading(false);
      toast.success('Your message Sent successfully.');
      navigate(PATH_DASHBOARD.inbox);
    } catch (error) {
      setLoading(false);
      reset();
      const err = error as { data: string; status: number };
      if (err.status === 400) {
        toast.error(err.data);
      } else {
        toast.error('An Error occurred. Please contact admins');
      }
    }
  };

  if (loading) {
    return (
      <div className='w-full'>
        <Spinner />
      </div>
    );
  }

  return (
    <div className='pageTemplate2'>
      <h1 className='text-2xl font-bold'>Send Message</h1>
      <div className='pageTemplate3 items-stretch'>
        <form onSubmit={handleSubmit(onSubmitSendMessageForm)}>
          <UsernamesComboBox
            usernames={usernames}
            control={control}
            name='receiverUserName'
            error={errors.receiverUserName?.message}
          />
          <InputField control={control} label='Text' inputName='text' error={errors.text?.message} />
          <div className='flex justify-center items-center gap-4 mt-6'>
            <Button variant='secondary' type='button' label='Discard' onClick={() => navigate(PATH_DASHBOARD.inbox)} />
            <Button variant='primary' type='submit' label='Send' onClick={() => {}} loading={loading} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SendMessagePage;
