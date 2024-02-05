import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Input,
    Button,
    Grid,
    SimpleGrid,
} from '@chakra-ui/react'
import ApiTestContent from '../Components/ApiTestContent/ApiTestContent'
import { loginUser, registerUser } from '../Services/backService'
import { deleteUserQuote, getQuotes, getUserQuotes, getUsersAndQuotes, saveUserQuote } from '../Services/backService'

const ApiTestPage = () => {

    const routes = [
        {
            url: "/api/register",
            method: "POST",
            inputs: ['name', 'email', 'password'],
            methodEx: registerUser,
            useToken: false
        },
        {
            url: "/api/login",
            method: "POST",
            inputs: ['email', 'password'],
            methodEx: loginUser,
            useToken: false
        },
        {
            url: "/api/quotes/{mode}   EMPTY|random",
            method: "GET",
            inputs: ['mode','limit','new'],
            methodEx: getQuotes,
            useToken: true
        },
        {
            url: "/api/user/quotes",
            method: "GET",
            inputs: [],
            methodEx: getUserQuotes,
            useToken: true
        },
        {
            url: "/api/user/quotes",
            method: "POST",
            inputs: [],
            methodEx: saveUserQuote,
            useToken: true
        },
        {
            url: "/api/user/quotes/{id}",
            method: "DELETE",
            inputs: ['id'],
            methodEx: deleteUserQuote,
            useToken: true
        },
        {
            url: "/api/users",
            method: "GET",
            inputs: [],
            methodEx: getUsersAndQuotes,
            useToken: true
        },
    ]

    return (
        <Box
            minWidth="100%"
            bg="white"
            p="5"
        >
            <Accordion>
                {
                    routes.map(r => {
                        return <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    [{r.method}] {r.url}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                           <ApiTestContent routeExtra={r}></ApiTestContent>
                        </AccordionPanel>
                    </AccordionItem>
                    })
                }
               
            </Accordion>
        </Box>
    )
}

export default ApiTestPage