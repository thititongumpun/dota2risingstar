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
import { GetServerSideProps, NextPage } from "next";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { fetchPlayers } from "../hooks/useFetchPlayers";

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["players"], fetchPlayers);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const Index: NextPage = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["players"],
    queryFn: fetchPlayers,
  });
  if (isLoading) console.log("loading");
  return (
    <>
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
    </>
  );
};

export default Index;
