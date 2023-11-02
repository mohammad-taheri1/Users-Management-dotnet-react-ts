import PageAccessTemplate from '../../components/dashboard/page-access/PageAccessTemplate';
import { FaUserCog } from 'react-icons/fa';

const OwnerPage = () => {
  return (
    <div className='pageTemplate2'>
      <PageAccessTemplate color='#3b3549' icon={FaUserCog} role='Owner' />
    </div>
  );
};

export default OwnerPage;
