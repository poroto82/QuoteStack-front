import React, { useEffect, useState, memo, useContext, useRef, useCallback } from "react";
import { useAuth } from "../Hooks/useAuth";
import { useToast } from "@chakra-ui/react";
import { getQuotes } from "../Services/backService";
import QuoteCard from "../Components/Quote/Quote";

const QuotesPage = () => {
  const { user } = useAuth()
  const toast = useToast()

  const [quotes, setQuotes] = useState([])

  const gquotes = async () => {
    try{
      const quoteRta = await getQuotes()
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
    gquotes()

  }, [])

  return (
    quotes.map(function (i) {
      return <QuoteCard quote={i}></QuoteCard>;
    })
  );
};

export default QuotesPage;