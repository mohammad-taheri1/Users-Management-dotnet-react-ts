import { PiDetective } from 'react-icons/pi';

const AuthSpinner = () => {
  return (
    <div className='w-80 h-80 mx-auto flex justify-center items-center relative'>
      <div className='absolute w-full h-full inset-0 border-8 border-purple-300 border-t-purple-700 rounded-full animate-spin'></div>
      <h1>
        <PiDetective className='w-40 h-40 text-purple-700' />
      </h1>
    </div>
  );
};

export default AuthSpinner;
