import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
} from '@chakra-ui/react'
import ApiTestContent from '../Components/ApiTestContent/ApiTestContent'
import { useAuth } from '../Hooks/useAuth'


const ApiTestPage = () => {
    const { user } = useAuth()

    const routes = [
        {
            urlShow: "/api/register",
            url: "/api/register",
            method: "post",
            form: ['name', 'email', 'password'],
            params: [],
            queryParams:[],
            useToken: false
        },
        {
            urlShow: "/api/login",
            url: "/api/login",
            method: "post",
            form: ['email', 'password'],
            params: [],
            queryParams:[],
            useToken: false
        },
        {
            urlShow: "/api/quotes/{MODE}  Empty|quotes|random",
            url: "/api/quotes",
            method: "get",
            form: [],
            params: ['mode'],
            queryParams:['limit','new'],
            useToken: true
        },
        {
            urlShow: "/api/user/quotes",
            url: "/api/user/quotes",
            method: "get",
            form: [],
            params: [],
            queryParams:[],
            useToken: true
        },
        {
            urlShow: "/api/user/quotes",
            url: "/api/user/quotes",
            method: "post",
            form: [],
            params: [],
            queryParams:[],
            useToken: true
        },
        {
            urlShow: "/api/user/quotes/{id}",
            url: "/api/user/quotes",
            method: "DELETE",
            form: [],
            params: ['id'],
            queryParams:[],
            useToken: true
        },
        {
            urlShow: "/api/users",
            url: "/api/users",
            method: "get",
            form: [],
            params: [],
            queryParams:[],
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
                                    [{r.method}] {r.urlShow}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                           <ApiTestContent tokenInit={user.token} routeExtra={r}></ApiTestContent>
                        </AccordionPanel>
                    </AccordionItem>
                    })
                }
               
            </Accordion>
        </Box>
    )
}

export default ApiTestPage