import { Header } from '../components/header';
import { TabBar } from '../components/tabBar';

const History = () => {
  return (
    <main className='container w-[100vw] min-h-[100vh] h-auto pb-[80px]'>
      <Header />
      <h1>Tela de histórico de lembretes</h1>
      <TabBar page={'history'} />
    </main>
  );
};

export default History;
