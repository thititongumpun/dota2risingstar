import {
  Text,
  Card,
  Stack,
  CardBody,
  Heading,
  Image,
  SimpleGrid,
  Link as ChakraLink,
  Spinner,
} from "@chakra-ui/react";
import { Main } from "../components/Main";
import { NextPage } from "next";
import { useFetchPlayers } from "../hooks/useFetchPlayers";

const Index: NextPage = () => {
  const { data, isLoading, isError } = useFetchPlayers();

  if (isLoading) {
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    );
  }

  if (isError) {
    return (
      <div className="center">
        Something Error
        <span role="img" aria-label="sad">
          😢
        </span>
      </div>
    );
  }

  return (
    <Main>
      <SimpleGrid columns={{ base: 2, sm: 3 }} spacing={5}>
        {data.map((stat) => (
          <Card
            key={stat.playerId}
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
            color="tomato"
          >
            <Image
              src={stat.avatar}
              alt={stat.avatar}
              objectFit="cover"
              maxW={{ base: "100%", sm: "80px" }}
              maxH={{ base: "80px", sm: "100%" }}
            />
            <Stack>
              <CardBody>
                <Heading size="md" py="2">
                  <ChakraLink href={stat.playerId.toString()}>
                    {stat.playerName}
                  </ChakraLink>
                </Heading>
                <Text color="text">ชนะ: {stat.wl.win}</Text>
                <Text color="text">แพ้: {stat.wl.lose}</Text>
              </CardBody>
            </Stack>
          </Card>
        ))}
      </SimpleGrid>
    </Main>
  );
};

export default Index;
