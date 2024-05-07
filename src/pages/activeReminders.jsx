import { Header } from '../components/header';
import { TabBar } from '../components/tabBar';

const ActiveReminders = () => {
  return (
    <main>
      <Header />
      <h1>Tela de histórico de lembretes</h1>
      <TabBar page={'reminder'} />
    </main>
  );
};

export default ActiveReminders;
