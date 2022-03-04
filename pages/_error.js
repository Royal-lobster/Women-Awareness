import React from "react";
import { Flex, Heading, Link } from "@chakra-ui/react";
import NextLink from "next/link";

function Error({ statusCode }) {
  return (
    <Flex direction="column" gap={4} align="center" justify="center" mt="20vh">
      <Heading>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : "An error occurred on client"}
      </Heading>
      <NextLink href="/" passHref>
        <Link href="passRef">Go to Home</Link>
      </NextLink>
    </Flex>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
