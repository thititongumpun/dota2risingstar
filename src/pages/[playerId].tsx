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
  console.log(profile);
  return {
    props: {
      profile: profile.profile,
    },
  };
};

type PlayerIdProps = {
  profile: Profile;
};

const PlayerIdPage: NextPage<PlayerIdProps> = ({ profile, xd }) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Center>
          <Image
            src={profile.avatarfull}
            alt={profile.personaname}
            borderRadius="lg"
            justifySelf="center"
            objectFit="cover"
            w={280}
          />
        </Center>
        <Stack mt="6" spacing="3">
          <Heading size="md">Dota Name: {profile.personaname}</Heading>
          <Text>Id: {profile.account_id}</Text>
          {profile.plus ? (
            <Text>
              Dota Plus: <CheckIcon />
            </Text>
          ) : (
            <Text>
              Dota Plus: <CloseIcon />
            </Text>
          )}
          {profile.loccountrycode ? (
            <Text>ประเทศ: {profile.loccountrycode}</Text>
          ) : (
            <Text>ประเทศ: คนเถื่อน</Text>
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
