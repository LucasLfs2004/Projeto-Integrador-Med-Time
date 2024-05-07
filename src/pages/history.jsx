import { Header } from '../components/header';
import { TabBar } from '../components/tabBar';

const History = () => {
  return (
    <main>
      <Header />
      <h1>Tela de histórico de lembretes</h1>
      <TabBar page={'history'} />
    </main>
  );
};

export default History;
