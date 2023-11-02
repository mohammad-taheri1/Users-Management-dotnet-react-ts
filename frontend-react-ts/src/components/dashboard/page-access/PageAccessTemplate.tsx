import { ReactNode } from 'react';
import { IconType } from 'react-icons';

interface IProps {
  role: string;
  icon: IconType;
  color: string;
  children?: ReactNode;
}

const PageAccessTemplate = ({ role, icon: Icon, color, children }: IProps) => {
  return (
    <div className='pageTemplate3' style={{ borderColor: color }}>
      <section className='w-full flex justify-center items-center gap-8'>
        <div>{<Icon className='text-6xl' style={{ color: color }} />}</div>

        <div className='space-y-2' style={{ color: color }}>
          <h2 className='text-4xl'>This is {role} Page</h2>
          <h2 className='text-md'>You must have {role} access to see this page</h2>
        </div>
      </section>
      <section>{children}</section>
    </div>
  );
};

export default PageAccessTemplate;
