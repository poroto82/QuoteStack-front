import { Box, Button, Code, Input, SimpleGrid } from "@chakra-ui/react"
import { useAuth } from "../../Hooks/useAuth"
import { useState } from "react"
import { setAuthToken } from "../../Services/backService"

const ApiTestContent = ({ routeExtra }) => {

    const { user } = useAuth()

    const [formState, setFormState] = useState({})
    const [token, setToken] = useState({})
    const [result, setResult] = useState("{}")

    async function onSubmit(e) {
        e.preventDefault();
        
        if (routeExtra.useToken){
            setAuthToken(token)
        }
        const rta = await routeExtra.methodEx(Object.values(formState))
        setResult(JSON.stringify(rta.data))
    }

    return <SimpleGrid columns={2} spacing={10}>
        <Box>
            <form onSubmit={onSubmit}>
                {routeExtra.useToken &&
                    <Input
                        placeholder="Api Token"
                        label="Api Token"
                        variant='outline'
                        value={user.token}
                        onChange={(e)=>setToken(e.target.value)}
                    />
                }
                {routeExtra.inputs.length > 0 &&

                    routeExtra.inputs.map((i, idx) => <Input
                        placeholder={i}
                        label={i}
                        name={i}
                        variant='outline'
                        onChange={(e) => setFormState({ ...formState, [i]: e.target.value })}

                    />)
                }

                <Button type="submit" colorScheme='blue' variant="solid">
                    send
                </Button>
            </form>

        </Box>
        <Box>
            <Code>{result}</Code>

        </Box>
    </SimpleGrid>
}

export default ApiTestContent