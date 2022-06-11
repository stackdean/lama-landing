import React from 'react';
import TeamSectionWrapper from './team.style';
import { Container, Row, Col } from "reusecore/Layout";
import Box from "reusecore/Box";
import { SectionTitle } from "reusecore/SectionTitle";
import Heading from "reusecore/Heading";
import Text from "reusecore/Text";
import Image from "reusecore/Image";
import { AnimationOnScroll } from 'react-animation-on-scroll';

import name1 from 'assets/images/team/1.jpg'
import name2 from 'assets/images/team/2.jpg'
import name3 from 'assets/images/team/3.jpg'
import name4 from 'assets/images/team/4.jpg'


const Team = () => {
  return (
    <TeamSectionWrapper>
       <Container>
       <Row>
            <Col className="offset-lg-3 offset-md-1 lg-6 md-10  sm-12">
              <SectionTitle>
                
                <AnimationOnScroll animateIn="animate__bounceIn">
                 <Heading style={{color:'#5b6faa', marginBottom: '5rem'}}> Meet Our Lovely Team</Heading>
                </AnimationOnScroll>
              </SectionTitle>
            </Col>
          </Row>

        <Row>
          <Col className="md-12">
            <Box className="team-item-wrapper">
            
              <Row>
              <Col className="lg-3 sm-6 xs-12">
                    <Box className="team-item text-center">
                      <Image src={name1}  />
                      <Heading className="title-team" as="h3">Team First Name</Heading>
                      <Text className="desc-team">Body</Text>
                    </Box>
              </Col>

              <Col className="lg-3 sm-6 xs-12">
                    <Box className="team-item text-center">
                      <Image src={name2}  />
                      <Heading className="title-team" as="h3">Team Second Name</Heading>
                      <Text className="desc-team">Body</Text>
                    </Box>
              </Col>

              <Col className="lg-3 sm-6 xs-12">
                    <Box className="team-item text-center">
                      <Image src={name3}  />
                      <Heading className="title-team" as="h3">Team Third Name</Heading>
                      <Text className="desc-team">Body</Text>
                    </Box>
              </Col>

              <Col className="lg-3 sm-6 xs-12">
                    <Box className="team-item text-center">
                      <Image src={name4}  />
                      <Heading className="title-team" as="h3">Team Fourth Name</Heading>
                      <Text className="desc-team">Body</Text>
                    </Box>
              </Col>
              </Row>
            </Box>
          </Col>
        </Row>
      </Container>
    </TeamSectionWrapper>
   
  );
}

export default Team;