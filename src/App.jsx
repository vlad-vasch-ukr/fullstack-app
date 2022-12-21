import 'normalize.css';
import { router } from './router/index';
import { RouterProvider } from 'react-router-dom';
import './assets/app.scss';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
