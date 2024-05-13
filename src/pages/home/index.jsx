import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { Header } from '../../components/header';
import { TabBar } from '../../components/tabBar';

const Home = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState();

  useEffect(() => {
    if (!localStorage.getItem('med_time_initialized')) {
      navigate('welcome');
    } else {
      setUserData(JSON.parse(localStorage.getItem('data_user')));
    }
  }, []);

  return (
    <main className='container w-[100vw] min-h-[100vh]'>
      <Header />
      <h1 className='font-medium text-[#0F2737] text-[20px]'>
        Olá {userData?.name}, deseja adicionar um lembrete?
      </h1>
      <div className='w-full flex flex-col items-center'>
        <div className='bg-[#193750] rounded-[18px] w-[132px] h-[132px] flex flex-col items-center justify-center mb-[6px] mt-[16px]'>
          <img src='/assets/medicamento.png' alt='medicamento' />
        </div>

        <Link
          to={'/add-reminder'}
          className='bg-[#193750] rounded-[6px] w-[132px] h-[32px] flex flex-col items-center justify-center'
        >
          <p className='text-[#FBA725] font-medium text-[14px]'>Adicionar</p>
        </Link>
      </div>
      <div className='flex flex-col text-[#0F2737] mt-[24px] mx-[24px] gap-y-[12px]'>
        <div className='flex flex-row w-full items-center justify-between'>
          <div className='text-[#0F2737] flex flex-row gap-x-[8px]'>
            <img src='/assets/clockIcon.svg' className='w-[32px]' alt='' />
            <h1 className='font-medium text-[22px]'>Próximo Lembrete</h1>
          </div>
          <p className='text-[#193750] font-medium text-[12px]'>
            Amanhã - 19:00
          </p>
        </div>
        <div className='flex flex-row gap-x-[16px]'>
          <img src='/assets/medicamento.png' className='w-[32px]' alt='' />
          <p>Tomar dipirona 500mg</p>
        </div>
      </div>
      <TabBar page={'home'} />
    </main>
  );
};

export default Home;
