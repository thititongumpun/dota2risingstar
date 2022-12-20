import { Container } from "./Container";
import { Hero } from "./Hero";
import { Footer } from "./Footer";
import { DarkModeSwitch } from "./DarkModeSwitch";
import { Text } from "@chakra-ui/react";
import Head from "next/head";
import Navbar from "./Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
    <Navbar />
    <Container>
      <Head>
        <title>Dota2 Rising Star</title>
        <link rel="icon" href="/images/icon.ico" />
      </Head>
      <Hero title={`Dota2 Rising Star ${new Date().getFullYear()}`} />
      {children}
      <DarkModeSwitch />
      <Footer>
        <Text>กำจัด ❤️ ขยะ</Text>
      </Footer>
    </Container>
    </>
  );
};

export default Layout;
