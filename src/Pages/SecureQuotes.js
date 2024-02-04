import React, { useEffect, useState, memo, useContext, useRef, useCallback } from "react";
import { useAuth } from "../Hooks/useAuth";
import { Box, Button, useToast } from "@chakra-ui/react";
import { getQuotes } from "../Services/backService";
import QuoteCard from "../Components/Quote/Quote";

const SecureQuotesPage = () => {
  const { user } = useAuth()
  const toast = useToast()

  const [quotes, setQuotes] = useState([])
  const [refresh, setRefresh] = useState(false)

  const getSecureQuotes = async (forceRefresh) => {
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
  }

  useEffect(() => {
    getSecureQuotes()

  }, [refresh])

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