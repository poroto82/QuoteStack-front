import { Box, Button, Code, Input, SimpleGrid, useToast } from "@chakra-ui/react"
import { useState } from "react"
import { setAuthToken } from "../../Services/backService"
import axios from "axios"

const ApiTestContent = ({ routeExtra, tokenInit }) => {
    const toast = useToast()

    const [formState, setFormState] = useState({})
    const [params, setParams] = useState({})
    const [queryParams,setQueryParams] = useState({})

    const [token, setToken] = useState(tokenInit)
    const [result, setResult] = useState("{}")

    async function sendRequest() {
        
        if (routeExtra.useToken){
            setAuthToken(token)
        }
        
        const queryParamsStr = new URLSearchParams(queryParams);

        let url = routeExtra.url + (params ? '/'+ Object.values(params).join('/') : '') +((queryParamsStr !== '') ? '?'+queryParamsStr : '')

        try{
            const rta = await axios.request({
                url: url,
                method: routeExtra.method,
                data:formState
            })
            
            setResult(JSON.stringify(rta.data))
        }
        catch(error){
            toast({
                title: `${error}`,
                status: 'error',
                isClosable: true,
              })
        }
    }

    return <SimpleGrid columns={2} spacing={10}>
        <Box>
            
                {routeExtra.useToken &&
                    <Input
                        placeholder="Api Token"
                        label="Api Token"
                        variant='outline'
                        value={token}
                        onChange={(e)=>setToken(e.target.value)}
                    />
                }
                {routeExtra.form.length > 0 &&
                    routeExtra.form.map((i, idx) => <Input
                        key={idx}    
                        placeholder={i}
                        label={i}
                        name={i}
                        variant='outline'
                        onChange={(e) => setFormState({ ...formState, [i]: e.target.value })}

                    />)
                }
                {routeExtra.params.length > 0 &&
                    routeExtra.params.map((i, idx) => <Input
                        key={idx}
                        placeholder={i}
                        label={i}
                        name={i}
                        variant='outline'
                        onChange={(e) => setParams({ ...params, [i]: e.target.value })}

                    />)
                }
                {routeExtra.queryParams.length > 0 &&
                    routeExtra.queryParams.map((i, idx) => <Input
                        key={idx}
                        placeholder={i}
                        label={i}
                        name={i}
                        variant='outline'
                        onChange={(e) => setQueryParams({ ...queryParams, [i]: e.target.value })}

                    />)
                }

                <Button onClick={sendRequest} colorScheme='blue' variant="solid">
                    send
                </Button>
            

        </Box>
        <Box>
            <Code>{result}</Code>
        </Box>
    </SimpleGrid>
}

export default ApiTestContent