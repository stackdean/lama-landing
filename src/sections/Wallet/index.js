import React from "react";

import { Container, Row, Col } from "reusecore/Layout";
import Box from "reusecore/Box";
import Heading from "reusecore/Heading";
import Text from "reusecore/Text";
import Image from "reusecore/Image";
import Counter from "reusecore/Counter";
import { SectionTitle, SectionBackground } from "reusecore/SectionTitle";
import { AnimationOnScroll } from 'react-animation-on-scroll';

import walletImage from "assets/images/marketWallet.png";
import SectionParticle from "assets/images/particles/crypto-managment-wallet.svg";

import data from "assets/data/wallet";
import WalletSectionWrapper from "./wallet.style";

const Wallet = () => {
  return (
    <WalletSectionWrapper>
      <Container>
        <img
          src={SectionParticle}
          className="section__particle"
          alt="Lama"
        />
        <Row>
          
          <Col className="lg-6 offset-lg-1 md-8 xs-12">
            <Box className="wallet-left-content">
              
              <SectionTitle>
                <SectionBackground>
                  <Heading style={{color:'#223b55', fontSize:'26px'}}> Crypto management wallet </Heading>
                </SectionBackground>
                <AnimationOnScroll animateIn="animate__slideInDown">
                <Text style={{color:'#6a7894'}}>
                  Attention in when in just something bread not hundred well,
                  muff value emerge on the known officers. A parameters phase
                  orthographic the can differentiates far catch he warned a they
                  but country. Times, cache in and what but the that go
                  facilitate far were house.
                </Text>
                </AnimationOnScroll>
              </SectionTitle>

              <Box className="wallet-info">
                {data.wallet.map((item, index) => (
                  <Box className="counter-item" key={index}>
                    <Counter end={item.count} suffix={item.suffixText} />
                    <Text>{item.body}</Text>
                  </Box>
                ))}
              </Box>
            </Box>
          </Col>

          <Col className="lg-5 md-4 xs-12">
            <Box className="wallet-image">
              <Image src={walletImage} alt="Lama wallet image" />
            </Box>
          </Col>
        </Row>
      </Container>
    </WalletSectionWrapper>
  );
};

export default Wallet;
