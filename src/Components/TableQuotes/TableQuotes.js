import { Button, Table, TableContainer, Tbody, Td, Text, Tr } from "@chakra-ui/react"

const TableQuotes = ({ quotes, sameUser, deleteQuote }) => {

    return (
        <>
            {quotes.length === 0 && <Text>There's no favourite quotes in this user.</Text>}
            <TableContainer>
                <Table size="lg" variant='striped'>
                    <Tbody>
                        {quotes.map(function (q) {
                            return <Tr>
                                <Td colSpan={3}>{q.text}</Td>
                                <Td>{sameUser && <Button onClick={() => deleteQuote(q.id)}>Delete</Button>}</Td>
                            </Tr>
                        })}
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    )
}

export default TableQuotes