import { Header } from '../components/header';
import { TabBar } from '../components/tabBar';

const NewReminder = () => {
  return (
    <main>
      <Header />
      <h1>Tela de lembretes ativos</h1>
      <TabBar page={'new-reminder'} />
    </main>
  );
};

export default NewReminder;
