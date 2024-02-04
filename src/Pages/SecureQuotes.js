import React, { useEffect, useState, useCallback } from "react";
import { useAuth } from "../Hooks/useAuth";
import { Box, Button, useToast } from "@chakra-ui/react";
import { getQuotes, setAuthToken } from "../Services/backService";
import QuoteCard from "../Components/QuoteCard/QuoteCard";

const SecureQuotesPage = () => {
  const { user } = useAuth()
  const toast = useToast()

  const [quotes, setQuotes] = useState([])
  const [refresh, setRefresh] = useState(false)

  const getSecureQuotes = useCallback(async (forceRefresh) => {
    try{
      const quoteRta = await getQuotes(forceRefresh,10)
      setQuotes(quoteRta.data)
    }
    catch(error){
      toast({
        title: `${error}`,
        status: 'error',
        isClosable: true,
      })
    }
  },[setQuotes, toast])

  useEffect(() => {
    setAuthToken(user.token)
    getSecureQuotes()

  }, [getSecureQuotes, user.token])

  return (
    <>
    {quotes.map(function (i) {
      return <QuoteCard quote={i}></QuoteCard>;
    })}
    <Box
        onClick={()=>{getSecureQuotes(true); setRefresh(!refresh);}}
        position='fixed'
        bottom='20px'
        right={['16px', '84px']}
        zIndex={3}>
        <Button
          size={'sm'}
          colorScheme='whatsapp'
          variant='solid'>
          Force Refresh
        </Button>
      </Box>
    </>
  );
};

export default SecureQuotesPage;