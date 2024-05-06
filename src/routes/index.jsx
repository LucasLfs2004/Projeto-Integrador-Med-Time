import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import Home from '../pages/home';

const Content = props => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
  ]);

  return <Suspense>{routes}</Suspense>;
};

export default Content;
