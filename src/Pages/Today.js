import React, { useEffect, useState, memo, useContext, useRef, useCallback } from "react";
import { useAuth } from "../Hooks/useAuth";
import { Box, Button, useToast } from "@chakra-ui/react";
import { getRandomQuote } from "../Services/backService";
import QuoteCard from "../Components/Quote/Quote";

const TodayPage = () => {
  const { user } = useAuth()
  const toast = useToast()

  const [quote, setQuote] = useState({})
  const [refresh, setRefresh] = useState(false)

  const randomQuote = async (forceRefresh) => {
    try {
      const quoteRta = await getRandomQuote(forceRefresh)
      setQuote(quoteRta.data[0])
    }
    catch (error) {
      toast({
        title: `${error}`,
        status: 'error',
        isClosable: true,
      })
    }
  }

  useEffect(() => {
    randomQuote()
  }, [refresh])

  return (<>
    <QuoteCard quote={quote}></QuoteCard>
    <Box
      position='fixed'
      bottom='20px'
      right={['16px', '84px']}
      zIndex={3}>
      <Button
        onClick={()=>{randomQuote(true); setRefresh(!refresh)}}
        size={'sm'}
        colorScheme='whatsapp'
        variant='solid'>
        Force Refresh
      </Button>
    </Box>
  </>);
};

export default TodayPage;