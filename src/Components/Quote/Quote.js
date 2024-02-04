import React from "react";
import { Box, Card, CardBody, Text} from "@chakra-ui/react";

const QuoteCard = ({quote}) => {
  
  return (
    <Box
      m="2"
      width='800px'
    >
    <Card>
      <CardBody>
        <Text>{quote.cached ? ' [CACHE] ' : ''}{quote.text}</Text>
        <Text align='right' as='b'>{quote.author}</Text>
      </CardBody>
    </Card>
    </Box>
  );
};

export default QuoteCard;