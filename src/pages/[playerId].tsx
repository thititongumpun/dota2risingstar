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
} from "@chakra-ui/react";
import { GetServerSideProps, NextPage } from "next";
import { ArrowBackIcon, CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { PlayerProfile, Profile } from "../../types/profile";
import NextLink from "next/link";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const playerId = context.params.playerId;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APIURL}/profile/${playerId}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const profile: PlayerProfile = await response.json();
  return {
    props: {
      profile: profile,
    },
  };
};

type PlayerIdProps = {
  profile: PlayerProfile;
};

const PlayerIdPage: NextPage<PlayerIdProps> = ({ profile }) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Center>
          <Image
            src={profile.profile.avatarfull}
            alt={profile.profile.personaname}
            borderRadius="lg"
            justifySelf="center"
            objectFit="cover"
            w={280}
          />
        </Center>
        <Stack mt="6" spacing="3">
          <Heading size="md">Dota Name: {profile.profile.personaname}</Heading>
          <Text>Id: {profile.profile.account_id}</Text>
          {profile.profile.plus ? (
            <Text>
              Dota Plus: <CheckIcon />
            </Text>
          ) : (
            <Text>
              Dota Plus: <CloseIcon />
            </Text>
          )}
          {profile.profile.loccountrycode ? (
            <Text>ประเทศ: {profile.profile.loccountrycode}</Text>
          ) : (
            <Text>ประเทศ: คนเถื่อน</Text>
          )}
          <Text>แรงค์: {profile.competitive_rank}</Text>
          <Text>โซโล่เดี่ยวพอ: {profile.solo_competitive_rank}</Text>
          <Text>ฝีมือประมาณ: {profile.mmr_estimate.estimate}</Text>
          {profile.leaderboard_rank ? (
            <Text>อันดับ Immortal: {profile.leaderboard_rank}</Text>
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
};

export default PlayerIdPage;
