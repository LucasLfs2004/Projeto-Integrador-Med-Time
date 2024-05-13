import { Header } from '../components/header';
import Slide from '../components/slide';
import { TabBar } from '../components/tabBar';

const NewReminder = () => {
  return (
    <main>
      <Header />
      <Slide />
      <TabBar page={'new-reminder'} />
    </main>
  );
};

export default NewReminder;
