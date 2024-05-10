import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Header } from '../../components/header';
import { TabBar } from '../../components/tabBar';

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('med_time_initialized')) {
      navigate('welcome');
    }
  });

  return (
    <main className='container w-[100vw] h-[100vh]'>
      <Header />
      <TabBar page={'home'} />
    </main>
  );
};

export default Home;
