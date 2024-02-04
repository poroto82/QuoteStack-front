import React, { useState } from "react";
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Text} from "@chakra-ui/react";
import { AddIcon, CheckIcon } from "@chakra-ui/icons";
import { useAuth } from "../../Hooks/useAuth";
import { saveUserQuote, setAuthToken } from "../../Services/backService";

const QuoteCard = ({quote, addToFav = true}) => {
  const { user } = useAuth()

  const [saved, setSaved] = useState(false)

  const saveFavouriteQuote = async () =>{
    setAuthToken(user.token)
    await saveUserQuote(quote)
    setSaved(true)
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
      {user && addToFav &&
      <CardFooter >
        {
          !saved && <Button onClick={saveFavouriteQuote} size="sm"><AddIcon></AddIcon> Add to my Favs</Button>
        }
        {
          saved && <CheckIcon /> 
        }
        
      </CardFooter>}
    </Card>
    </Box>
  );
};

export default QuoteCard;