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
import { Main } from "../components/Main";
import { NextPage } from "next";
import { useFetchPlayers } from "../hooks/useFetchPlayers";
import LoadingScreen from "../components/Loading";

const Index: NextPage = () => {
  const { data, isLoading, isError } = useFetchPlayers();

  if (isLoading) {
    return <LoadingScreen />;
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
      <SimpleGrid columns={{base: 2, md: 3, lg: 3}} spacing={10}>
        {data.map((data) => (
          <Card
            key={data.playerId}
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
            color="tomato"
          >
            <Image
              src={data.avatar}
              alt={data.avatar}
              objectFit="cover"
              maxW={{ base: "100%", sm: "100px" }}
              maxH={{ base: "100%", sm: "100%" }}
            />
            <Stack>
              <CardBody>
                <Heading size="md" py="2">
                  <ChakraLink href={data.playerId.toString()}>
                    {data.playerName}
                  </ChakraLink>
                </Heading>
                <Text color="text">ชนะ: {data.wl.win}</Text>
                <Text color="text">แพ้: {data.wl.lose}</Text>
              </CardBody>
            </Stack>
          </Card>
        ))}
      </SimpleGrid>
    </Main>
  );
};

export default Index;
