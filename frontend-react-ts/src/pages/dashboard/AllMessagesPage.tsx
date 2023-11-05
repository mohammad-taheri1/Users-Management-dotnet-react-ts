import { useEffect, useState } from 'react';
import { IMessageDto } from '../../types/message.types';
import axiosInstance from '../../utils/axiosInstance';
import { ALL_MESSAGES_URL } from '../../utils/globalConfig';
import { toast } from 'react-hot-toast';
import Spinner from '../../components/general/Spinner';
import moment from 'moment';

const AllMessagesPage = () => {
  const [messages, setMessages] = useState<IMessageDto[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getAllMessages = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get<IMessageDto[]>(ALL_MESSAGES_URL);
      const { data } = response;
      setMessages(data);
      setLoading(false);
    } catch (error) {
      toast.error('An Error happened. Please Contact admins');
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllMessages();
  }, []);

  if (loading) {
    return (
      <div className='w-full'>
        <Spinner />
      </div>
    );
  }

  return (
    <div className='pageTemplate2'>
      <h1 className='text-2xl font-bold'>All Messages</h1>
      <div className='pageTemplate3 items-stretch'>
        <div className='grid grid-cols-8 p-2 border-2 border-gray-200 rounded-lg'>
          <span>Date</span>
          <span className='col-span-5'>Text</span>
          <span>Sender</span>
          <span>Receiver</span>
        </div>
        {messages.map((item) => (
          <div key={item.id} className='grid grid-cols-8 p-2 border-2 border-gray-200 rounded-lg'>
            <span>{moment(item.createdAt).fromNow()}</span>
            <span className='col-span-5'>{item.text}</span>
            <span>{item.senderUserName}</span>
            <span>{item.receiverUserName}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllMessagesPage;
