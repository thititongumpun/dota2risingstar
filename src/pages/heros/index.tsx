import {
  Box,
  Button,
  Center,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  SimpleGrid,
  Tag,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import React from "react";
import { Heros } from "../../../types/hero";
import LoadingScreen from "../../components/Loading";
import { Main } from "../../components/Main";
import { useFetchHeros } from "../../hooks/useFetchHeros";

const HeroPage = () => {
  const { data: heros, isLoading, isError } = useFetchHeros();
  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Main>
      <SimpleGrid minChildWidth="80px" spacing="40px">
        {Object.entries(heros).map(([key, value]) => {
          return (
            <Box
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              h={100}
              key={key}
              display="grid"
              justifyContent="center"
            >
              <Box mt="1">
                <Text textAlign="center" fontSize="xs">
                  {heros[key].displayName}
                </Text>
              </Box>
              <Popover placement="bottom-start">
                <PopoverTrigger>
                  <Button size="xs" mt="6">Tips</Button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverHeader fontWeight="semibold">
                    {heros[key].shortName} Tips
                  </PopoverHeader>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverBody>{heros[key].language.hype}</PopoverBody>
                </PopoverContent>
              </Popover>
            </Box>
          );
        })}
      </SimpleGrid>
    </Main>
  );
};

export default HeroPage;
