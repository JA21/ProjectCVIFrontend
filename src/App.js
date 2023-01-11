
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Dashboard from './pages/Private/Dashboard/Dashboard';
import Seller from './pages/Private/Seller/seller';
import InfoSeller from './pages/Private/InfoSeller/InfoSeller'
import Login from './pages/Public/Login/Login';
import useToken from './hooks/useToken';
import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />
  },
  {
    path: "/registrar",
    element: <Seller />
  },
  {
    path: "/informacionVendedor/:identificationNumber",
    element: <InfoSeller />
  },
  {
    path: "carnetDigital",
    element: <Seller />
  },
  


])


function App() {
  const {token, setToken} =useToken();
  if (!token) {
    return <Login setToken={setToken} />
  }
  return (
    <>
      <RouterProvider router={router} />

    </>

  );
}

export default App;
