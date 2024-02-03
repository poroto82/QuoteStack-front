import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from '../Hooks/useAuth';
import { Container } from '@chakra-ui/react'

export function ProtectedLayout() {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      
      <Container maxWidth="xg" sx={{ mt: 2 }}>
          <Outlet />
      </Container>
    </>
  )
}