import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from '../Hooks/useAuth';

export function PublicLayout() {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}