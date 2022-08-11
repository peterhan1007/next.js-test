import {
  Flex,
  Center,
  Text,
  Square,
  Box,
  VStack,
  HStack,
  Button,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
const Offer = () => {
  return (
    <Center>
      <Box mx="5" border="5px" borderColor="black.200">
        <Flex color="white" px="6">
          <Center w="100px" color={"black"}>
            <VStack>
              <Text>CAESARS</Text>
              <Text>SPORTSBOOK</Text>
            </VStack>
          </Center>
          <Box color={"black"} ml="20" p="5">
            <Text>$ 1500 IN RISK FREE BETS</Text>
            <UnorderedList px="5">
              <ListItem>Lorem ipsum dolor sit amet</ListItem>
              <ListItem>Consectetur adipiscing elit</ListItem>
            </UnorderedList>
          </Box>
          <Box color={"black"} ml="6" p="5">
            <Center>
              <Button colorScheme={"blue"}>GET BONUS</Button>
            </Center>
          </Box>
        </Flex>
      </Box>
    </Center>
  );
};

export default Offer;
