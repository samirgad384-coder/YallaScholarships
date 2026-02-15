import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter([
  { path: '/', element: <HomePage />, errorElement: <NotFoundPage /> },
  { path: '/auth', element: <AuthPage />, errorElement: <NotFoundPage /> },
  { path: '*', element: <NotFoundPage /> },
]);

export default router;
