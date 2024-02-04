import React, { useState } from 'react'
import { useAuth } from '../Hooks/useAuth'
import { Box, Input, Button, Link, Stack, Text } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'

function LoginPage() {
  const [formState, setFormState] = useState({
    email: '',
    password: ''
  })

  const { login } = useAuth()

  function onSubmit(e) {
    e.preventDefault()
    login(formState)
  }

  const useQuery = () => new URLSearchParams(useLocation().search);
  const query = useQuery();
  const email = query.get('email');


  return (
    <Box
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    height="100vh"
    bg="#f5f5f5"
  >
    <Text fontSize='6xl'>myQuotes</Text>
    <form onSubmit={onSubmit}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width="400px"
        height="400px"
        bg="white"
        borderRadius="10px"
        boxShadow="0 0 10px 0 rgba(0,0,0,0.2)"
      >
        <Stack spacing={3}>
          <Input
            placeholder="Email"
            label="Email"
            type='email'
            variant="outline"
            value={email}
            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
          />
          <Input
            placeholder="Password"
            label="Password"
            type={'password'}
            variant="outline"

            onChange={(e) => setFormState({ ...formState, password: e.target.value })}
          />
         
          <Button type="submit" colorScheme='blue' variant="solid">
            Login
          </Button>
        </Stack>
        <Link mt="4" href="/register">
          Need an account? Register
        </Link>

      </Box>
    </form>
  </Box>
  )
}

export default LoginPage
