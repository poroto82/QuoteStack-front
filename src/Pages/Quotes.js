import React, { useEffect, useState, useCallback } from "react";
import { Box, Button, useToast } from "@chakra-ui/react";
import { getQuotes } from "../Services/backService";
import QuoteCard from "../Components/QuoteCard/QuoteCard";

const QuotesPage = () => {
  const toast = useToast()
  const [quotes, setQuotes] = useState([])
  const [loaded, setLoaded] = useState(false)

  const gquotes = useCallback (async (forceRefresh) => {
    setLoaded(false)
    try {
      const quoteRta = await getQuotes(forceRefresh)
      setQuotes(quoteRta.data)
      setLoaded(true)
    }
    catch (error) {
      toast({
        title: `${error}`,
        status: 'error',
        isClosable: true,
      })
    }
  },[toast,setQuotes])

  useEffect(() => {
    gquotes()

  }, [gquotes])

  return (
    <>
      {quotes.map(function (i,idx) {
        return <QuoteCard isLoaded={loaded} key={idx} quote={i}></QuoteCard>;
      })}
      <Box
        onClick={()=>{gquotes(true)}}
        position='fixed'
        bottom='20px'
        right={['16px', '84px']}
        zIndex={3}>
        <Button
          size={'sm'}
          colorScheme='blue'
          variant='solid'>
          Force Refresh
        </Button>
      </Box>
    </>
  );
};

export default QuotesPage;