import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { useAuth } from '../Hooks/useAuth'
import { Box, Text, Input, Button, Link  } from '@chakra-ui/react'

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
      bgcolor="#f5f5f5"
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        component='form'
        onSubmit={onSubmit}
        width="400px"
        height="400px"
        bgcolor="white"
        borderRadius="10px"
        boxShadow="0 0 10px 0 rgba(0,0,0,0.2)"
        >
        <Input
          id="outlined-basic"
          label="Name"
          variant="outlined"
          margin="normal"
          sx={{ width: '70%'}}
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
        />
        <Input
          id="outlined-basic"
          label="Email"
          variant="outlined"
          margin="normal"
          sx={{ width: '70%'}}
          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
        />
        <Input
          id="outlined-basic"
          label="Password"
          type={'password'}
          variant="outlined"
          margin="normal"
          sx={{ width: '70%'}}
          onChange={(e) => setFormState({ ...formState, password: e.target.value })}
        />
        <Button type="submit" variant="contained" sx={{ width: '70%', margin: '1rem' }}>
          Register
        </Button>
        <Link component={RouterLink} to="/login">
          Ya tenes cuenta? Login
        </Link>

        </Box>
    </Box>
  )
}

export default RegisterPage