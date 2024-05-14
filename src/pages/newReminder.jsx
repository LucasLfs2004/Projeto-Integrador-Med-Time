import { Header } from '../components/header';
import Slide from '../components/slide';
import { TabBar } from '../components/tabBar';

const NewReminder = () => {
  return (
    <main className='container w-[100vw] min-h-[100vh] h-auto pb-[80px]'>
      <Header />
      <Slide />
      <TabBar page={'new-reminder'} />
    </main>
  );
};

export default NewReminder;
