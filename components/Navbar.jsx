import React from "react";
import {
  Box,
  Heading,
  VStack,
  Text,
  HStack,
  Flex,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { NavLinksData } from "../data/NavLinksData";
import { useRouter } from "next/router";

function Navbar() {
  let router = useRouter();
  return (
    <Box
      background="url('/hero.png')"
      backgroundSize="cover"
      backgroundPosition="center"
    >
      <VStack color="white" py={12}>
        <Heading>Women&apos;s Awarenessness</Heading>
        <Text textAlign="center">
          Jawaharlal Nehuru Technological University Gurajada Vizianagaram
          <br />
          Women Empowerment & Grievances Cell
        </Text>
      </VStack>
      <HStack spacing={8} bgColor="#0000002a" h="50px">
        <Flex
          display={{ base: "none", lg: "flex" }}
          align="center"
          px={8}
          justify="stretch"
          borderTopRightRadius="xl"
          bgColor="brand.accent"
          h="100%"
          mr={8}
        >
          <Heading size="md" color="#0000009a">
            Links
          </Heading>
        </Flex>
        <HStack
          overflowX="scroll"
          align="center"
          css={{
            "&::-webkit-scrollbar": {
              width: 0,
              height: 0,
            },
          }}
        >
          {NavLinksData.map((nav_link) => {
            console.log(router.asPath, nav_link.href);
            let isActive = nav_link.href === router.asPath;
            return (
              <NextLink href={nav_link.href} passHref>
                <Link
                  bgColor={isActive ? "brand.contrast" : "transparent"}
                  href="passRef"
                  px={4}
                  rounded="full"
                  _hover={{ textDecoration: "none" }}
                >
                  <Text
                    whiteSpace="nowrap"
                    fontWeight="bold"
                    color={isActive ? "#0000007a" : "white"}
                  >
                    {nav_link.text}
                  </Text>
                </Link>
              </NextLink>
            );
          })}
        </HStack>
      </HStack>
    </Box>
  );
}

export default Navbar;
