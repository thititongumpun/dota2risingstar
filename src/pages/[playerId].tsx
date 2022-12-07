import {
  Text,
  Card,
  Stack,
  CardBody,
  Heading,
  Image,
  SimpleGrid,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Container } from "../components/Container";
import { GetServerSideProps, NextPage } from "next";
import { Hero } from "../components/Hero";
import { Main } from "../components/Main";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const playerId = context.params.playerId;

  return {
    props: { playerId },
  };
};

type PlayerIdProps = {
  playerId: number;
};

const PlayerIdPage: NextPage<PlayerIdProps> = ({ playerId }) => {
  return (
    // <Container>
      // <Hero title={`Dota2 Rising Star ${new Date().getFullYear()}`} />
      // <Main>{playerId}</Main>
      <div>{playerId}</div>
  );
};

export default PlayerIdPage;
