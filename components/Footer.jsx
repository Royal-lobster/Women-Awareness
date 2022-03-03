import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";

export default function SmallWithSocial() {
  return (
    <Box mt={18} p={8} bg={"gray.800"} color={"gray.200"}>
      <Text align="center">
        © 2020 Jawaharlal Nehuru Technological University Gudujada. All rights
        reserved
      </Text>
    </Box>
  );
}
