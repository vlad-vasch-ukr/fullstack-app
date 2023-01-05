import { createRoutesFromElements, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import RegisterForm from '../components/RegisterForm/RegisterForm';
import AuthLayout from '../layouts/AuthLayout/AuthLayout';
import MainLayout from '../layouts/MainLayout/MainLayout';
import DetailsPage from '../pages/DetailsPage/DetailsPage';
import CreateList from '../pages/CreateList/CreateList';

export const routes = createRoutesFromElements(
  <>
    <Route element={<MainLayout />}>
      <Route path="/" element={<MainPage />} />
      <Route path="/lists/details/:id" element={<DetailsPage />} />
      <Route path="/lists/create" element={<CreateList />} />
    </Route>
    <Route element={<AuthLayout />}>
      <Route path="/register" element={<RegisterForm />} />
    </Route>
  </>,
);
