import { Flex, Heading } from "@chakra-ui/react";
import { NextPage } from "next";

type HeroProps = {
  title: string;
};

export const Hero: NextPage<HeroProps> = ({ title }) => (
  <Flex
    justifyContent="center"
    // height="50vh"
    bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
    bgClip="text"
  >
    <Heading fontSize="5vw" my={10}>{title}</Heading>
  </Flex>
);
