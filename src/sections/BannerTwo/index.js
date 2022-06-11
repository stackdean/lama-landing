import React from "react";
import Link from "next/link";

import { Container, Row, Col } from "reusecore/Layout";
import Box from "reusecore/Box";
import Badge from "reusecore/Badge";
import Heading from "reusecore/Heading";
import Text from "reusecore/Text";
import Image from "reusecore/Image";

import BannerImage from "assets/images/banners/banner-two/Lama-banner-two-thumb.svg";

import particleTopLeft from "assets/images/particles/banner/particle-top-left.png";
import particleUnderLogo from "assets/images/particles/banner/particle-under-logo.png";
import prticleTopRight from "assets/images/particles/banner/prticle-top-right.png";
import particleBottomLeft from "assets/images/particles/banner/particle-bottom-left.png";
import bannerGif from "assets/images/banners/banner-one/bannerGif.gif"

import {FaGithub} from 'react-icons/fa'

import keyIcon from 'assets/images/banners/banner-two/Lama-banner-key-icon.svg';
import watchIcon from 'assets/images/banners/banner-two/Lama-banner-watch-icon.svg';
import heartIcon from 'assets/images/banners/banner-two/Lama-banner-heart-icon.svg';

import BannerWrapper from "./banner.style";

const BannerTwo = () => {
  return (
    <BannerWrapper>
      <img src={particleTopLeft} className="section__particle top-left" alt="Lama particles"/>
      <img src={particleUnderLogo} className="section__particle two" alt="Lama particles"/>
      <img src={prticleTopRight} className="section__particle top-right" alt="Lama particles"/>
      <img src={particleBottomLeft} className="section__particle bottom-left" alt="Lama particles"/>
      
      <div className="nk-ovm mask-c-dark shape-v mask-contain-bottom"></div>
      <Container>
      <img className="banner__thumb" src={bannerGif} alt="" />
      
        <Row>
          <Col className="lg-7 md-10 xs-12">
            <Box className="banner-content"> 
              <Heading>
                Access the <br/>
                power of LAMA
              </Heading>
              <Text as="span" className="description">
              Lama Investment is a business concept that aims to provide a stable income through sustainable real world utility
              </Text>

              <Box className="coin-info">
                <Box>
                  <Image src={keyIcon} alt="crypto banner icon" />
                  <Text>Access</Text>
                </Box>
                <Box>
                  <Image src={watchIcon} alt="crypto banner icon" />
                  <Text>Speed</Text>
                </Box>
                <Box>
                  <Image src={heartIcon} alt="crypto banner icon" />
                  <Text>Certainty</Text>
                </Box>
              </Box>

              <Box className="banner-btn">
                <Link href="#">
                  <a className="btn btn-fill"> <FaGithub />Whitepaper</a>
                </Link> 
              </Box>
            </Box>
          </Col>
        </Row>
      </Container>
    </BannerWrapper>
  );
};

export default BannerTwo;
