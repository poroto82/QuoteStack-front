import React, { useEffect, useState, memo, useContext, useRef, useCallback } from "react";
import { useAuth } from "../Hooks/useAuth";
import { useToast } from "@chakra-ui/react";
import { getRandomQuote } from "../Services/backService";
import QuoteCard from "../Components/Quote/Quote";

const TodayPage = () => {
  const { user } = useAuth()
  const toast = useToast()

  const [quote, setQuote] = useState({})

  const randomQuote = async () => {
    try{
      const quoteRta = await getRandomQuote()
      setQuote(quoteRta.data[0])
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
    randomQuote()

  }, [])

  return (
   <QuoteCard quote={quote}></QuoteCard>
  );
};

export default TodayPage;