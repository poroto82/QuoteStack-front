import React, { useEffect, useState, useCallback } from "react";
import { Box, Button, useToast } from "@chakra-ui/react";
import { getRandomQuote } from "../Services/backService";
import QuoteCard from "../Components/QuoteCard/QuoteCard";

const TodayPage = () => {
  const toast = useToast()

  const [quote, setQuote] = useState({})
  const [refresh, setRefresh] = useState(false)

  const randomQuote = useCallback(async (forceRefresh) => {
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
  }, [setQuote, toast]);

  useEffect(() => {
    randomQuote()
  }, [randomQuote])

  return (<>
    <QuoteCard quote={quote}></QuoteCard>
    <Box
      position='fixed'
      bottom='20px'
      right={['16px', '84px']}
      zIndex={3}>
      <Button
        onClick={() => { randomQuote(true); setRefresh(!refresh) }}
        size={'sm'}
        colorScheme='blue'
        variant='solid'>
        Force Refresh
      </Button>
    </Box>
  </>);
};

export default TodayPage;