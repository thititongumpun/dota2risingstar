import { Center, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";
import { Heros } from "../../../types/hero";
import LoadingScreen from "../../components/Loading";
import { useFetchHeros } from "../../hooks/useFetchHeros";

const HeroPage = () => {
  const { data: heros, isLoading, isError } = useFetchHeros();
  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Wrap spacing="30px">
      {Object.entries(heros).map(([key, value]) => {
        return (
          <WrapItem key={key}>
            <Center w="180px" h="80px" bg="red.200">
              {heros[key].displayName}
            </Center>
          </WrapItem>
        );
      })}
    </Wrap>
  );
};

export default HeroPage;
