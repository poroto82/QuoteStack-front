import React, { useEffect, useState } from "react";
import { useAuth } from "../Hooks/useAuth";
import {  useToast } from "@chakra-ui/react";
import { getUserQuotes, setAuthToken } from "../Services/backService";
import QuoteCard from "../Components/QuoteCard/QuoteCard";

const FavouriteQuotesPage = () => {
  const { user } = useAuth()
  const toast = useToast()

  const [quotes, setQuotes] = useState([])
  const [refresh, setRefresh] = useState(0)
  
  const getSecureQuotes = async () => {
    try{
      const quoteRta = await getUserQuotes()
      setQuotes(quoteRta.data)
      if (quoteRta.data.length === 0){
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

  }, [refresh])

  return (
    <>
    {quotes.map(function (i, idx) {
      return <QuoteCard key={idx} deleteFav={true} setRefresh={setRefresh} quote={i} addToFav={false}></QuoteCard>;
    })}
    </>
  );
};

export default FavouriteQuotesPage;