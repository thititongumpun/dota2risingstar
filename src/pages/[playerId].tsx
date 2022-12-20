import {
  Text,
  Card,
  Stack,
  CardBody,
  Heading,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Image,
  Center,
  Spinner,
} from "@chakra-ui/react";
import { ArrowBackIcon, CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { PlayerProfile } from "../../types/profile";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { fetchPlayerId } from "../hooks/useFetchPlayers";
import LoadingScreen from "../components/Loading";

const PlayerIdPage = () => {
  const router = useRouter();
  const playerId =
    typeof router.query?.playerId === "string" ? router.query.playerId : "";
  const {
    isSuccess,
    data: player,
    isLoading,
    isError,
  } = useQuery<PlayerProfile, Error>(
    ["getPlayerId", playerId],
    () => fetchPlayerId(playerId),
    {
      enabled: playerId.length > 0,
    }
  );

  if (isLoading) {
    return <LoadingScreen />
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

  if (isSuccess) {
    return (
      <Card maxW="sm">
        <CardBody>
          <Center>
            <Image
              src={player.profile.avatarfull}
              alt={player.profile.personaname}
              borderRadius="lg"
              justifySelf="center"
              objectFit="cover"
              w={280}
            />
          </Center>
          <Stack mt="6" spacing="3">
            <Heading size="md">Dota Name: {player.profile.personaname}</Heading>
            <Text>Id: {player.profile.account_id}</Text>
            {player.profile.plus ? (
              <Text>
                Dota Plus: <CheckIcon />
              </Text>
            ) : (
              <Text>
                Dota Plus: <CloseIcon />
              </Text>
            )}
            {player.profile.loccountrycode ? (
              <Text>ประเทศ: {player.profile.loccountrycode}</Text>
            ) : (
              <Text>ประเทศ: คนเถื่อน</Text>
            )}
            <Text>แรงค์: {player.competitive_rank}</Text>
            <Text>โซโล่เดี่ยวพอ: {player.solo_competitive_rank}</Text>
            <Text>ฝีมือประมาณ: {player.mmr_estimate.estimate}</Text>
            {player.leaderboard_rank ? (
              <Text>อันดับ Immortal: {player.leaderboard_rank}</Text>
            ) : (
              <Text>อับดับ: ไม่มีขยะจัด</Text>
            )}
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <NextLink href="/" passHref>
              <Button variant="ghost" colorScheme="blue">
                <ArrowBackIcon />
              </Button>
            </NextLink>
          </ButtonGroup>
        </CardFooter>
      </Card>
    );
  }
};

export default PlayerIdPage;
