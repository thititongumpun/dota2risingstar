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
import { Stats } from "../../types/stats";

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  const response = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/stats`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const stats: Stats[] = await response.json();
  return { props: { stats } };
};

type Props = {
  stats: Stats[];
};

const Index: NextPage<Props> = ({ stats }) => {
  return (
    <>
      <Main>
        <SimpleGrid columns={{ base: 2, sm: 3 }} spacing={5}>
          {stats.map((stat) => (
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
