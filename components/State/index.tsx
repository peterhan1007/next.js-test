import type { NextPage } from "next";
import { HStack, Text, VStack, Flex } from "@chakra-ui/react";

interface StateProps {
  nearestState: string;
  nearestDistance: number;
}

const PositionState: NextPage<StateProps> = ({
  nearestDistance,
  nearestState,
}) => {
  return (
    <VStack className="m-20">
      <Text fontWeight={"extrabold"}>
        BEST SPORTSBOOK OFFERS IN {nearestDistance}
      </Text>
      <Text>
        <Flex>
          <Text fontWeight={"extrabold"} mr="1" as="span">
            {nearestState}
          </Text>
          {"  "}
          is{"  "}
          <Text fontWeight={"extrabold"} as="span" mx={1}>
            234 miles
          </Text>
          {"  "}
          away from you.
        </Flex>
      </Text>
    </VStack>
  );
};

export default PositionState;
