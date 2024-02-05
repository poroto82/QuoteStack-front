import { Box, SimpleGrid, Stack } from "@chakra-ui/react"

const ApiTestPage = () => {

    return (
        <Box>
            <SimpleGrid columns={3} spacing={10}>
                <Box bg='tomato' height='80px'></Box>
                <Box bg='tomato' height='80px'></Box>
                <Box bg='tomato' height='80px'></Box>
            </SimpleGrid>
        </Box>    
    )
}

export default ApiTestPage