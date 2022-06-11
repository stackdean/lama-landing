import React from "react";

import { Container, Row, Col } from "reusecore/Layout";
import Box from "reusecore/Box";
import Link from "next/link";
import Heading from "reusecore/Heading";
import Button from "reusecore/Button";
import Input from "reusecore/Form/Input";
import { SectionTitle } from "reusecore/SectionTitle";
import SubscribeWrapper from "./subscribe.style";
import data from "assets/data/footer";

const Subscribe = () => {
  return (
    <SubscribeWrapper id="contact">
      <Container>
        <Row>
          <Col className="col-12">
            <Box className="subscribe-box-bg">
              <Row>
                <Col className="lg-6 offset-lg-3 xs-12">
                  <SectionTitle>
                    <Heading style={{fontSize: '28px'}}> Don’t miss out, 
                     <br /> Join our community</Heading>
                    {/* <Text>
                      Sign up for updates and market news. Subscribe to our
                      newsletter and receive update about ICOs and crypto tips.
                    </Text> */}
                  </SectionTitle>
                </Col>
              </Row>
              <Row>
                <Col className="lg-8 offset-lg-2 xs-12">
                  <Box className="form-box">
                    <Input
                      type="text"
                      placeholder="Enter your email address . . ."
                    />
                    <Button>Subscribe</Button>
                  </Box>

                  <Box className="footer-social-links">
                    {data.links.map((item, index) => (
                      <Link href={item.url} key={index}>
                        <a> {item.icon} </a>
                      </Link>
                    ))}
                  </Box>

                </Col>
              </Row>
            </Box>
          </Col>


          
        </Row>
      </Container>
    </SubscribeWrapper>
  );
};

export default Subscribe;
