import {
  ButtonGroup,
  Container,
  HStack,
  IconButton,
  Stack,
  VStack,
  Text,
} from "@chakra-ui/react";
import * as React from "react";

const Footer = () => (
  <Container
    as="footer"
    bg="black"
    color={"white"}
    maxWidth="200ch"
    mt={"auto"}
    p="5"
  >
    <Stack spacing={{ base: "4", md: "5" }}>
      <Text fontSize="sm" color="subtle">
        <VStack>
          <Text fontWeight={"extrabold"}>
            &copy; {new Date().getFullYear()} TALLYSIGHT Inc. RESERVED reserved.
          </Text>
          <Text>
            If you or someone you know has a gambling problem and wants help,
            call 1-800-Gambler. You must be 21 years or older to place a bet.
          </Text>
        </VStack>
      </Text>
    </Stack>
  </Container>
);

export default Footer;
