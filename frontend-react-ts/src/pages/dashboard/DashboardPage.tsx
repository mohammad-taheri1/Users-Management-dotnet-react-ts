import PageAccessTemplate from '../../components/dashboard/page-access/PageAccessTemplate';
import { BsGlobeAmericas } from 'react-icons/bs';

const DashboardPage = () => {
  return (
    <div className='pageTemplate2'>
      <PageAccessTemplate color='#000' icon={BsGlobeAmericas} role='Dashboard'>
        <div className='text-3xl space-y-2'>
          <h1>Dashboard Access can be either:</h1>
          <h1>Owner</h1>
          <h1>Admin</h1>
          <h1>Manager</h1>
          <h1>User</h1>
        </div>
      </PageAccessTemplate>
    </div>
  );
};

export default DashboardPage;
