import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import ActiveReminders from '../pages/activeReminders';
import History from '../pages/history';
import Home from '../pages/home';
import NewReminder from '../pages/newReminder';
import Welcome from '../pages/welcome';

const Content = props => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/welcome', element: <Welcome /> },
    { path: '/history', element: <History /> },
    { path: '/add-reminder', element: <NewReminder /> },
    { path: '/reminders', element: <ActiveReminders /> },
  ]);

  return <Suspense>{routes}</Suspense>;
};

export default Content;
