import React, { useState } from 'react'
import { useAuth } from '../Hooks/useAuth'
import { Box, Input, Button, Link, Stack, Text } from '@chakra-ui/react'

function RegisterPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
  })

  const { register } = useAuth()

  function onSubmit(e) {
    e.preventDefault()
    register(formState)
  }

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
              placeholder="Name"
              label="Name"
              variant='outline'
              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
            />
            <Input
              placeholder="Email"
              label="Email"
              variant="outline"
              type='email'
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
            />
            <Input
              placeholder="Password"
              label="Password"
              type={'password'}
              variant="outline"

              onChange={(e) => setFormState({ ...formState, password: e.target.value })}
            />
            <Input
              placeholder="Confirm Password"
              label="Password"
              type={'password'}
              variant="outline"

              onChange={(e) => setFormState({ ...formState, password: e.target.value })}
            />
            <Button type="submit" colorScheme='blue' variant="solid">
              Register
            </Button>
          </Stack>
          <Link mt="4" href="/login">
            Already registered? Login
          </Link>

        </Box>
      </form>
    </Box>
  )
}

export default RegisterPage