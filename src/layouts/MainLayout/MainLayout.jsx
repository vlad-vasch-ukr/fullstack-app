import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AppHeader from '../../components/AppHeader/AppHeader';
import NavBar from '../../components/NavBar/NavBar';
import './MainLayout.scss';

export default function MainLayout() {
  return (
    <div className="main-layout">
      <AppHeader />
      <main>
        <NavBar />
        <div className="main-layout__content">
          <Outlet />
        </div>
      </main>
      <Toaster />
    </div>
  );
}
