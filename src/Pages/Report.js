import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { deleteUserQuote, getUsersAndQuotes, setAuthToken } from "../Services/backService"
import { useAuth } from "../Hooks/useAuth"
import { Link } from "react-router-dom"
import TableQuotes from "../Components/TableQuotes/TableQuotes"

const ReportPage = () => {
    const { user } = useAuth()
    const [users, setUsers] = useState([])
    const [refresh, setRefresh] = useState(0)
    

    const getData = async () => {
        const rta = await getUsersAndQuotes()
        setUsers(rta.data)
    }

    const deleteQuote = async (id) => {
        await deleteUserQuote(id)
        setRefresh(id)
    }

    useEffect(() => {
        setAuthToken(user.token)
        getData()
    }, [refresh])


    return (
        <Box
            minWidth="100%"
            bg="white"
            p="5"
        >
            <Accordion>
                {users.map(function (u) {
                    return <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    <Link to={{ pathname: '/login', search: "email="+u.email }}>{u.name} - {u.email}</Link>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <TableQuotes quotes={u.quotes} deleteQuote={deleteQuote} sameUser={user.user.id === u.id}></TableQuotes>
                        </AccordionPanel>
                    </AccordionItem>
                })}
            </Accordion>
        </Box>
    )
}

export default ReportPage