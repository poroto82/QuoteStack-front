import { Box, HStack, Link } from "@chakra-ui/react";
export function Menu() {

    return (
        <>
            <Box bg='blue' w='100%' p={4} color='white'>
                <HStack spacing='24px'  justifyContent="center"
      alignItems="center">
                    <Link href="/today">Quote of the day</Link>
                    <Link href="/quotes">Five Random Quotes</Link>
                    <Link href="/secure-quotes">Ten Secure Quotes</Link>
                    <Link href="/favorite-quotes">Favourite Quotes</Link>
                    <Link href="/report-favorite-quotes">Report of favourite Quotes</Link>
                </HStack>
            </Box>
        </>
    )
}