import React, { useEffect, useState, memo, useContext, useRef, useCallback } from "react";
import { useAuth } from "../Hooks/useAuth";
import { Box, Button, useToast } from "@chakra-ui/react";
import { getUserQuotes, setAuthToken } from "../Services/backService";
import QuoteCard from "../Components/Quote/Quote";

const FavouriteQuotesPage = () => {
  const { user } = useAuth()
  const toast = useToast()

  const [quotes, setQuotes] = useState([])
  
  const getSecureQuotes = async () => {
    try{
      const quoteRta = await getUserQuotes()
      setQuotes(quoteRta.data)
      if (quoteRta.data.length == 0){
        toast({
          title: "You don't have favourites",
          status: 'info'
        })
      }

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
    setAuthToken(user.token)
    getSecureQuotes()

  }, [])

  return (
    <>
    {quotes.map(function (i, idx) {
      return <QuoteCard key={idx} quote={i} addToFav={false}></QuoteCard>;
    })}
    </>
  );
};

export default FavouriteQuotesPage;