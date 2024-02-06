import React, { useEffect, useState, useCallback } from "react";
import { useAuth } from "../Hooks/useAuth";
import {  useToast } from "@chakra-ui/react";
import { getUserQuotes, setAuthToken } from "../Services/backService";
import QuoteCard from "../Components/QuoteCard/QuoteCard";

const FavouriteQuotesPage = () => {
  const { user } = useAuth()
  const toast = useToast()

  const [quotes, setQuotes] = useState([])
  const [refresh, setRefresh] = useState(0)
  const [loaded, setLoaded] = useState(false)
  
  const getSecureQuotes = useCallback(async () => {
    setLoaded(false)
    try{
      const quoteRta = await getUserQuotes()
      setQuotes(quoteRta.data)
      if (quoteRta.data.length === 0){
        toast({
          title: "You don't have favourites",
          status: 'info'
        })
      }
      setLoaded(true)
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

  }, [getSecureQuotes, user.token, refresh])

  return (
    <>
    {quotes.map(function (i, idx) {
      return <QuoteCard key={idx} isLoaded={loaded} deleteFav={true} setRefresh={setRefresh} quote={i} addToFav={false}></QuoteCard>;
    })}
    </>
  );
};

export default FavouriteQuotesPage;