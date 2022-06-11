import React from "react";
import Link from "next/link";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

import { Container, Row, Col } from "reusecore/Layout";
import Box from "reusecore/Box";
import Heading from "reusecore/Heading";
import Text from "reusecore/Text";
import Image from "reusecore/Image";
import { List, ListItem } from "reusecore/List";
import Subscribe from "sections/Subscribe";

import LamaFooterLogo from "assets/images/logo-white.png";
import FooterWrapper from "./footer.style";

const Footer = () => {
  return (
    <FooterWrapper>
      <Box className="footer-content-wrapper">
        <Subscribe />
        <Container>
          <Row>
            <Col className="lg-3 sm-6">
              <Box className="footer-widgets company-desc">
                <Image src={LamaFooterLogo} alt="Lama footer logo" />
                <Text>
                Lama Investment is a business concept that aims to provide a stable income through sustainable real world utility
                </Text>

                <Box className="contact-info">
                  <Link href="#">
                    <a>
                      {" "}
                      <FaPhoneAlt /> contact@lama.com{" "}
                    </a>
                  </Link>
                  <Link href="#">
                    <a>
                      {" "}
                      <FaEnvelope /> +201011141478{" "}
                    </a>
                  </Link>
                </Box>
              </Box>
            </Col>
            <Col className="lg-3 sm-6">
              <Box className="footer-widgets">
                <Heading as="h2">Service</Heading>
                <List>
                  <ListItem>
                    <Link href="#">
                      <a>Web Design</a>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#">
                      <a>Web Development</a>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#">
                      <a>UXUI Design</a>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#">
                      <a>Graphics Design</a>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#">
                      <a>Software development</a>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#">
                      <a>Content</a>
                    </Link>
                  </ListItem>
                </List>
              </Box>
            </Col>
            <Col className="lg-3 sm-6">
              <Box className="footer-widgets">
                <Heading as="h2">About Us</Heading>
                <List>
                  <ListItem>
                    <Link href="#">
                      <a>About Us</a>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#">
                      <a>Work Portfolio</a>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#">
                      <a>Team</a>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#">
                      <a>Plan & Pricing</a>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#">
                      <a>Content</a>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#">
                      <a>Company News</a>
                    </Link>
                  </ListItem>
                </List>
              </Box>
            </Col>
            <Col className="lg-3 sm-6">
              <Box className="footer-widgets address">
                <Heading as="h2">Our Address</Heading>
                <Text>
                  12345, St Montergoo, CANADA
                </Text>
              </Box>
            </Col>
          </Row>
          <Row>
            <Col className="xs-12">
              

              <Box className="copyright-text">
                <Text>&copy; Lama | All right rserved 2022</Text>
                <Text as="span">
                  Designed By{" "}
                  <Link href="#">
                    <a>STACKDEANS</a>
                  </Link>
                </Text>
              </Box>
            </Col>
          </Row>
        </Container>
      </Box>
    </FooterWrapper>
  );
};

export default Footer;
