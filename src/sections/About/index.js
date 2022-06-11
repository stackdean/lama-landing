import React, { Component } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';



import { Container, Row, Col } from 'reusecore/Layout'
import Box from 'reusecore/Box';
import Heading from 'reusecore/Heading';
import Text from 'reusecore/Text';
import Image from 'reusecore/Image';
import {SectionTitle, SectionBackground} from 'reusecore/SectionTitle';

import { FaGooglePlay, FaApple } from "react-icons/fa";

import aboutImage from 'assets/images/about/about.png';



import AboutSectionWrapper from './about.style';




const About = () => {
    return (
        <AboutSectionWrapper id="about"> 
                <Container>
                    <Row>
                    
                        <Col className="lg-5 md-6 sm-12">
                        <AnimationOnScroll animateIn="animate__bounceIn">
                            <Image src={aboutImage} className="about-image" alt="Lama about image" />
                        </AnimationOnScroll >
                        </Col>
                    
                        <Col className="lg-6 offset-lg-1 md-6 sm-12">
                            <Box className="about-right-content">
                                <SectionTitle>
                                    <SectionBackground>
                                    <AnimationOnScroll animateIn="animate__tada">
                                        <Heading as="h1" style={{fontSize: '26px', color:"#223b55"}}>
                                        LAMA Initial Coin offering
                                        </Heading>
                                    </AnimationOnScroll>
                                    </SectionBackground>
                                    
                                    <AnimationOnScroll animateIn="animate__tada">
                                    <Text style={{color: '#6a7894'}}>Having a vast experience in multi-industry disciplines, the team were able to see the challenges and opportunities of both the past and the present. This drives them to build a company that provides the solution to the industry needs and offers a safe haven to investors.
                                    </Text>
                                    </AnimationOnScroll>
                                </SectionTitle>  

                                <Box className="about-list" >
                                <AnimationOnScroll animateIn="animate__fadeInLeftBig" delay={50}>
                                    <Text as="span" style={{color: '#6a7894'}}>
                                       <strong style={{color:'#c838e7'}}>Network: </strong> 
                                        Binance Smart Chain
                                    </Text>
                                </AnimationOnScroll>

                                <AnimationOnScroll animateIn="animate__fadeInLeftBig" delay={150}>
                                    <Text as="span" style={{color: '#6a7894'}}>
                                        <strong style={{color:'#6df7fb'}}>Total Supply: </strong>  
                                        1,000,000 LAMA
                                    </Text>
                                </AnimationOnScroll>

                                <AnimationOnScroll animateIn="animate__fadeInLeftBig" delay={300}>
                                    <Text as="span" style={{color: '#6a7894'}}>
                                        <strong style={{color:'#4268db'}}>Market Cap: </strong>  
                                        $500,000
                                    </Text>
                                </AnimationOnScroll>

                                </Box>

                            
                            </Box>
                        </Col>
                    </Row>
                </Container> 
        </AboutSectionWrapper>
    )
}


export default About;