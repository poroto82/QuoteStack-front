import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from '../Hooks/useAuth';
import { Menu } from "../Components/Menu/Menu";


export function PublicLayout() {
  // const { user } = useAuth();

  // // if (user) {
  // //   return <Navigate to="/" />;
  // // }

  return <>
    <Menu />
    <Outlet />
  </>;
}