
import { Route, Routes, } from 'react-router-dom';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/home/Home'));
const Phonebook = lazy(() => import('../pages/phonebook/Phonebook'));
const Login = lazy(() => import('../pages/login/login'));
const Registration = lazy(() => import('../pages/registration/Registration'));
const Layout = lazy(() => import('./Layout'));

export default function App() {
 
    return (
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="/contacts" element={<Phonebook /> } />
            
            <Route path="/login" element={<Login/> } />
            <Route path="/register" element={<Registration/> } />
          </Route>
        </Routes>
      </>
    );
  }

