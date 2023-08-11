import { AppBar } from 'components/AppBar/AppBar';
import { Suspense } from 'react'; 
import { Outlet } from 'react-router-dom';
import { IconContext } from "react-icons";

export default function Layout() {
  return (
    <>
      <IconContext.Provider value={{ color: "#690f84", style: { verticalAlign: 'middle' }, size: 24}}>
      {' '}      
      <AppBar />      
      <Suspense fallback={null}> 
        <Outlet />
      </Suspense> 
      </IconContext.Provider>
    </>
  );
};
