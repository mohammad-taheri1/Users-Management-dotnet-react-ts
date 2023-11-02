import PageAccessTemplate from '../../components/dashboard/page-access/PageAccessTemplate';
import { FaUserTie } from 'react-icons/fa';

const ManagerPage = () => {
  return (
    <div className='pageTemplate2'>
      <PageAccessTemplate color='#0B96BC' icon={FaUserTie} role='Manager' />
    </div>
  );
};

export default ManagerPage;
