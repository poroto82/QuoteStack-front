import React, { useEffect, useState, memo, useContext, useRef, useCallback } from "react";
import { useAuth } from "../Hooks/useAuth";
import { Box, Card, CardBody, Text } from "@chakra-ui/react";
import { getRandomQuote } from "../Services/backService";

const TodayPage = () => {
  const { user } = useAuth()

  const [quote, setQuote] = useState({})

  const randomQuote = async () => {
    const quoteRta = await getRandomQuote()
    setQuote(quoteRta.data[0])
  }

  useEffect(() => {
    randomQuote()

  }, [])

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bg="#f5f5f5"
    >
    <Card>
      <CardBody>
        <Text>{quote.text}</Text>
        <Text as='b'>{quote.author}</Text>
      </CardBody>
    </Card>
    </Box>
  );
};

export default TodayPage;