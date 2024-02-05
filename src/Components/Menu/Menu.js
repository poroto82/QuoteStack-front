import { Box, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function Menu() {
    return (
        <>
            <Box bg='#5353b3' w='100%' p={4} color='white'>
                <HStack spacing='24px'  justifyContent="center"
      alignItems="center">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                    <Link to="/today">Quote of the day</Link>
                    <Link to="/quotes">Five Random Quotes</Link>
                    <Link to="/secure-quotes">Ten Secure Quotes</Link>
                    <Link to="/favorite-quotes">Favourite Quotes</Link>
                    <Link to="/report-favorite-quotes">Report of favourite Quotes</Link>
                    <Link to="/api-test">API Test</Link>
                </HStack>
            </Box>
        </>
    )
}