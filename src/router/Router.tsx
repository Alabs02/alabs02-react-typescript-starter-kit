import { BrowserRouter, Routes } from 'react-router-dom';

// ROUTES
import MainRoutes from './mainRoutes';
import AuthRoutes from './authRoutes';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* {AuthRoutes()} {} */}
        {/* {MainRoutes()} {} */}
      </Routes>
    </BrowserRouter>
  );
}

export { Router as default };