import { Outlet } from "react-router-dom";
import { Menu } from "../Components/Menu/Menu";
import { Container } from "@chakra-ui/react";

export function PublicLayout() {

  return <>
    <Menu />
    <Container 
      maxWidth="xg" 
      minHeight="90vh"
      bg="#f5f5f5"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      >
      <Outlet />
    </Container>
  </>;
}