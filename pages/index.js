import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  Icon,
  LinkOverlay,
  LinkBox,
} from "@chakra-ui/react";
import { NavLinksData } from "../data/NavLinksData";
import { HomeQuote } from "../components/HomeQuote";
import { HomeLinkShortcut } from "../components/HomeLinkShortcut";
import { HomeCarousel } from "../components/HomeCarousel";

function index() {
  return (
    <Box mt={18} p={4} maxW="1300px" mx="auto">
      <Flex gap={{ base: 0, lg: 8 }} flexDir={{ base: "column", lg: "row" }}>
        <Box flex="3" position="relative">
          <HomeCarousel />
        </Box>
        <HomeQuote />
      </Flex>
      <Heading mt={{ base: 8, lg: 0 }} mb={4}>
        Links
      </Heading>
      <SimpleGrid columns={[1, 3, 4]} spacing={8}>
        {NavLinksData.map((navLink) => (
          <HomeLinkShortcut key={navLink.href} navLink={navLink} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default index;
