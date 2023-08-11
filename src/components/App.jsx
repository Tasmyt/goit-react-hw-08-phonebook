import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import Layout from './Layout';
import { PablicRoute } from './AuthRouts/PublicRoute';
import { PrivateRoute } from './AuthRouts/PrivateRoute';
import { current } from 'redax/auth/authOperation';
import { useDispatch } from 'react-redux';
import { NotFound } from 'pages/NotFound';
import { GlobalStyle } from 'pages/pages.styled';


const Home = lazy(() => import('../pages/home/Home'));
const Phonebook = lazy(() => import('../pages/phonebook/Phonebook'));
const Login = lazy(() => import('../pages/login/login'));
const Registration = lazy(() => import('../pages/registration/Registration'));

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="" element={<PrivateRoute />}>
            <Route path="/contacts" element={<Phonebook />} />
          </Route>

          <Route path="" element={<PablicRoute />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
}
