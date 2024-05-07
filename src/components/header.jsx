export const Header = () => {
  return (
    <header className='flex flex-row bg-[#0F2737] h-[60px] w-full justify-between items-center'>
      <div className='w-[80px]'>
        <p className='text-[14px] text-[#FBA725] font-medium'>Med Time</p>
      </div>
      <div className='flex flex-col items-center justify-end'>
        <img src='/assets/logo.png' alt='' className='w-[48px] h-[48px]' />
      </div>
      <div className='w-[80px] flex justify-end'>
        <img src='/assets/userIcon.png' alt='' className='h-[28px] pr-[12px]' />
      </div>
    </header>
  );
};
