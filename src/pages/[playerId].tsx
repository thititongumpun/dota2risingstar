import {
  Text,
  Card,
  Stack,
  CardBody,
  Heading,
  Avatar,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { GetServerSideProps, NextPage } from "next";
import { Main } from "../components/Main";
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

const PlayerIdPage: NextPage<PlayerIdProps> = ({ profile }) => {
  return (
    <Main>
      <Card maxW="sm">
        <CardBody>
          <Avatar
            size="2xl"
            name={profile.personaname}
            src={profile.avatarfull}
          />
          <Stack mt="6" spacing="1">
            <Heading size="md">{profile.personaname}</Heading>
            <Text>Dota Plus</Text>
            {profile.plus ? <Text>มีกูรวย</Text> : <Text>จน</Text>}
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <NextLink href="/" passHref>
              <Button variant="ghost" colorScheme="blue">
                กลับ
              </Button>
            </NextLink>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Main>
  );
};

export default PlayerIdPage;
