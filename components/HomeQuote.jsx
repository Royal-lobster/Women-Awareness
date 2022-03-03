import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
export function HomeQuote() {
  return (
    <Flex
      bgImage="url(/quote-bg.jpg)"
      bgColor="#0000008a"
      backgroundBlendMode="multiply"
      bgPos="center"
      bgSize="cover"
      p={8}
      color="white"
      flex="1"
      align="center"
      justifyContent="center"
      h="300px"
    >
      <Heading fontSize="25px" fontWeight="400" lineHeight="150%">
        “Think like a queen. A queen is not afraid to fail. Failure is another
        steppingstone to greatness.” -Oprah Winfrey
      </Heading>
    </Flex>
  );
}
