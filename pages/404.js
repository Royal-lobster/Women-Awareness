import React from "react";
import { Flex, Heading, Link } from "@chakra-ui/react";
import NextLink from "next/link";

function NotFound() {
  return (
    <Flex direction="column" gap={4} align="center" justify="center" mt="20vh">
      <Heading>Page Not Found</Heading>
      <NextLink href="/" passHref>
        <Link href="passRef">Go to Home</Link>
      </NextLink>
    </Flex>
  );
}

export default NotFound;
