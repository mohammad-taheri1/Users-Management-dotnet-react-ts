const HomePage = () => {
  return (
    <div className='pageTemplate1'>
      <div className='w-full flex justify-center items-center gap-4 bg-purple-600 border-4 border-white rounded-[300px] ring-4 ring-purple-600 p-10'>
        <div className='flex-1 flex flex-col justify-center items-start gap-8 ml-16 -mt-8'>
          <h1 className='text-7xl font-bold text-transparent bg-gradient-to-b from-amber-400 to-amber-600 bg-clip-text'>
            Dev Empower
          </h1>
          <h1 className='text-[38px] leading-6 font-bold text-white'>A Home for developers 🚀</h1>
          <div className='space-y-1 text-[35px] leading-6 font-bold text-white'>
            <h1>This is a tutorial project for</h1>
            <h1 className='text-6xl leading-[68px] font-normal text-transparent bg-gradient-to-tr from-[#DAC6FB] to-[#AAC1F6] bg-clip-text'>
              JWT
            </h1>
            <h1 className='text-3xl leading-6'>Authentication and Authorization</h1>
          </div>
        </div>
        <div className='flex-1 flex flex-col justify-center items-end'>
          <img src='images/me.jpg' className='w-[360px] h-[360px] object-cover rounded-full' />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
