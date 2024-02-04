import React, { useState } from "react";
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Text} from "@chakra-ui/react";
import { AddIcon, CheckIcon, MinusIcon } from "@chakra-ui/icons";
import { useAuth } from "../../Hooks/useAuth";
import { deleteUserQuote, saveUserQuote, setAuthToken } from "../../Services/backService";

const QuoteCard = ({quote, addToFav = true, deleteFav = false, setRefresh }) => {
  const { user } = useAuth()

  const [saved, setSaved] = useState(false)

  const saveFavouriteQuote = async () =>{
    setAuthToken(user.token)
    await saveUserQuote(quote)
    setSaved(true)
  }

  const deleteFavouriteQuote = async () =>{
    setAuthToken(user.token)
    await deleteUserQuote(quote.id)
    setRefresh(quote.id)
  }

  return (
    <Box
      m="2"
      width='800px'
      boxShadow='lg'
      rounded='md'
    >
    <Card>
      <CardBody>
        <Text>{quote.cached ? ' [CACHE] ' : ''}{quote.text}</Text>
        <Text as='b'>{quote.author}</Text>
      </CardBody>
      {user  &&
      <CardFooter >
        {
          addToFav && !saved && <Button onClick={saveFavouriteQuote} size="sm"><AddIcon></AddIcon> Add to my Favs</Button>
        }
        {
          addToFav && saved && <CheckIcon /> 
        }
        {
          deleteFav && <Button onClick={deleteFavouriteQuote} size="sm"><MinusIcon></MinusIcon> Delete from Favs</Button>
        }
      </CardFooter>}
    </Card>
    </Box>
  );
};

export default QuoteCard;