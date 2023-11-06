import { useEffect, useState } from 'react';
import axiosInstance from '../../utils/axiosInstance';
import { USERS_LIST_URL } from '../../utils/globalConfig';
import { IAuthUser } from '../../types/auth.types';
import LatestUsersSection from '../../components/dashboard/users-management/LatestUsersSection';
import UserChartSection from '../../components/dashboard/users-management/UserChartSection';
import UserCountSection from '../../components/dashboard/users-management/UserCountSection';
import UsersTableSection from '../../components/dashboard/users-management/UsersTableSection';
import { toast } from 'react-hot-toast';
import Spinner from '../../components/general/Spinner';

const UsersManagementPage = () => {
  const [users, setUsers] = useState<IAuthUser[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getUsersList = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get<IAuthUser[]>(USERS_LIST_URL);
      const { data } = response;
      setUsers(data);
      setLoading(false);
    } catch (error) {
      toast.error('An Error happened. Please Contact admins');
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsersList();
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
      <h1 className='text-2xl font-bold'>Users Management</h1>
      <UserCountSection usersList={users} />
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-x-4'>
        <UserChartSection usersList={users} />
        <LatestUsersSection usersList={users} />
      </div>
      <UsersTableSection usersList={users} />
    </div>
  );
};

export default UsersManagementPage;
