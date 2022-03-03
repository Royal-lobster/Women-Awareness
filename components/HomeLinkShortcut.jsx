import React from "react";
import { Flex, Icon, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import NextLink from "next/link";

export function HomeLinkShortcut({ navLink }) {
  return (
    <LinkBox>
      <Flex
        h="100px"
        bgColor={`hsl(${Math.floor(Math.random() * 360)}, 10%, 80%)`}
        align="center"
        justify="center"
        gap={4}
        key={navLink.href}
      >
        <Icon as={navLink.icon} fontSize="30px" />
        <NextLink href={navLink.href} passHref>
          <LinkOverlay href="passRef">
            <Text pt="5px" color="#222">
              {navLink.text}
            </Text>
          </LinkOverlay>
        </NextLink>
      </Flex>
    </LinkBox>
  );
}
