import PageAccessTemplate from '../../components/dashboard/page-access/PageAccessTemplate';
import { FaUserShield } from 'react-icons/fa';

const AdminPage = () => {
  return (
    <div className='pageTemplate2'>
      <PageAccessTemplate color='#9333EA' icon={FaUserShield} role='Admin' />
    </div>
  );
};

export default AdminPage;
