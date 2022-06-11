import React from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

import Navigation from "sections/Navigation";
import Timeline from "../src/sections/Timeline/timeline";
import Team from "../src/sections/Team/team";
import BannerTwo from 'sections/BannerTwo';
import Service from "sections/Service";
import CoinFund from "sections/CoinFund";
import About from "sections/About";
import Wallet from "sections/Wallet";
import Stack from "sections/Stack"; 

import Footer from "sections/Footer";


import theme from "assets/theme/theme";
import GlobalStyle from "assets/theme";

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
      <title>Lama | Investment Crypto Platform</title>
        <meta name="Description" content="React next landing page" />
        <meta name="theme-color" content="#280D57" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
        {/* <link rel="shortcut icon" type="image/x-icon" href={FavIcon} /> */}
      </Head>

      <GlobalStyle />
      <Navigation />
      <BannerTwo />
      <CoinFund />
      <Service />
      <About />
      <Wallet />
      <Timeline />
      <Team />
     
      <Stack />
      <Footer />
    </ThemeProvider>
  );
};

export default Home;