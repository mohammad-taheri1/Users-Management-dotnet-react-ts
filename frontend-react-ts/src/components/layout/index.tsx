import useAuth from '../../hooks/useAuth.hook';
import Header from './Header';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout = () => {
  const { isAuthenticated } = useAuth();
  const { pathname } = useLocation();

  console.log(pathname);

  const sideBarRenderer = () => {
    if (isAuthenticated && pathname.toLowerCase().startsWith('/dashboard')) {
      return <Sidebar />;
    }
    return null;
  };

  return (
    <div>
      <Header />

      {/* Using Outlet, We render all routes that are inside of this Layout */}
      <div className='flex'>
        {sideBarRenderer()}
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
