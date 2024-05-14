import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [userData, setUserData] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('data_user'));
    setUserData(JSON.parse(localStorage.getItem('data_user')));
  }, [localStorage]);

  return (
    <header className='flex flex-row bg-[#0F2737] h-[60px] w-full justify-between items-center '>
      <div className='w-[80px]'>
        <p className='text-[14px] text-[#FBA725] font-medium'>Med Time</p>
      </div>
      <div className='flex flex-col items-center justify-end'>
        <img src='/assets/logo.png' alt='' className='w-[48px] h-[48px]' />
      </div>
      <div
        className='w-[80px] flex justify-end'
        onClick={() => setMenuVisible(!menuVisible)}
      >
        <img src='/assets/userIcon.png' alt='' className='h-[28px] pr-[12px]' />
      </div>
      <section
        className={`side-menu ${
          menuVisible ? 'show-menu' : ''
        } w-[100vw] flex flex-col text-left text-[#FFF8EB] text-[16px] font-medium`}
      >
        <div className='flex flex-row p-[20px] gap-x-[16px] items-center'>
          <div className='bg-[#193750] rounded-xl w-[64px] h-[64px] flex items-center justify-center'>
            <img src='/assets/userIcon.png' alt='' />
          </div>
          <p>
            {userData?.name}
            {/* <br /> */}
            {/* {userData?.age} anos */}
          </p>
        </div>
        <div className='flex flex-col'>
          {/* <Link
            to={'/welcome'}
            className='border-t-[1px] border-[#FFF8EB] bg-[#193750]  pl-[24px] leading-[59px]'
          >
            {userData?.name ? 'Alterar dados' : 'Fazer login'}
          </Link> */}
          <Link
            to={'/reminders'}
            className='border-t-[1px] border-[#FFF8EB] bg-[#193750]  pl-[24px] leading-[59px]'
          >
            Lembretes
          </Link>
          <Link
            to={'/add-reminder'}
            className='border-t-[1px] border-[#FFF8EB] bg-[#193750]  pl-[24px] leading-[59px]'
          >
            Novo lembrete
          </Link>
          <Link
            to={'/history'}
            className='border-t-[1px] border-[#FFF8EB] bg-[#193750]  pl-[24px] leading-[59px]'
          >
            Histórico
          </Link>
        </div>
        <button
          onClick={() => {
            localStorage.removeItem('data_user');
            localStorage.removeItem('lembretesMedicamento');
            localStorage.removeItem('lembretesAgendamentos');
            localStorage.removeItem('lembretesConsultas');
            localStorage.removeItem('lembretesExames');
            navigate('/welcome');
          }}
          className='bg-[#FFF8EB] text-[18px] font-regular text-[#0F2737] w-[44%] mt-[240px] ml-[28%] rounded-md'
        >
          Finalizar Sessão
        </button>
      </section>
    </header>
  );
};
