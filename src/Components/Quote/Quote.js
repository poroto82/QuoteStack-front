import React from "react";
import { Box, Card, CardBody, Text} from "@chakra-ui/react";


const QuoteCard = ({quote}) => {
  
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      bg="#f5f5f5"
    >
    <Card>
      <CardBody>
        <Text>{quote.cached ? ' [CACHE] ' : ''}{quote.text}</Text>
        <Text as='b'>{quote.author}</Text>
      </CardBody>
    </Card>
    </Box>
  );
};

export default QuoteCard;