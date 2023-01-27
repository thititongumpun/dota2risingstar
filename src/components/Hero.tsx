import React, { useState, useEffect } from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { NextPage } from "next";

type HeroProps = {
  title: string;
};

export const Hero: NextPage<HeroProps> = ({ title }) => {
  const [dateState, setDateState] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);
  return (
    <Flex
      justifyContent="center"
      bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
      bgClip="text"
    >
      <Heading fontSize="5vw" my={10}>
        {title}
        <Text align="center" fontSize="sm">
          {dateState.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
        </Text>
      </Heading>
    </Flex>
  );
};
