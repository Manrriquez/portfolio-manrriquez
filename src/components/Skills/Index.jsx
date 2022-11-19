import React from 'react'
import { Col, Container, Row, StyledSection } from '../../styles/GlobalGrid';
import { TypographyDescription, TypographyTitle } from '../../styles/GlobalTypography';
import { Box} from '../../styles/GlobalComponents';
import { AccordionBox, AccordionConjuntTitleAndIcon, AccordionContent, AccordionItem, AccordionTitle, AccordionWrapper, FlexLg, ProgressTitle, Wrapper } from './Styled';

import {BsCodeSlash} from 'react-icons/bs'
import {BiCodeCurly} from 'react-icons/bi'
import {MdOutlineDesignServices} from 'react-icons/md'
import {FiDatabase} from 'react-icons/fi'
import ProgressBar from 'react-animated-progress-bar';



const Accordion = ({ title, children, icon }) => {

    const [isOpen, setOpen] = React.useState(false);

    return (
        <AccordionWrapper>

            <AccordionTitle className={`accordion-title ${isOpen ? "open" : ""}`} onClick={() => setOpen(!isOpen)}>
                <AccordionConjuntTitleAndIcon>{icon} {title}</AccordionConjuntTitleAndIcon>
            </AccordionTitle>

            <AccordionItem className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
                <AccordionContent>{children}</AccordionContent>
            </AccordionItem>

        </AccordionWrapper>
    );
};


const Skills = () => {
    
  return (
    <StyledSection>
        <Container>
            <Row>
                <Col size='10rem'>
                    <Box>
                        <TypographyTitle>SKILLS</TypographyTitle>
                        <TypographyDescription>
                            Segue essa seção sendo um breve resumo, sobre minhas hard skills, seguindo a porcentagem sobre
                            cada skill, assim tendo uma clareza diante meus conhecimentos em tal skill.
                        </TypographyDescription>
                    </Box>
                    <Row>
                        <Col>
                            <FlexLg>
                                <Wrapper>
                                    <Accordion icon={<BiCodeCurly/>} title="Frontend Development">
                                        <AccordionBox>
                                            <ProgressTitle>ReactJS</ProgressTitle>
                                            <ProgressBar
                                                    width="100%"
                                                    height="13px"
                                                    rect
                                                    fontColor="orange"
                                                    percentage="70"
                                                    rectPadding="1px"
                                                    rectBorderRadius="18px"
                                                    trackPathColor="transparent"
                                                    bgColor="#333333"
                                                    defColor={{
                                                        fair: 'orangered',
                                                        good: 'yellow',
                                                        excellent: 'green',
                                                        poor: 'red',
                                                      }}
                                                    trackBorderColor="orange"
                                                />
                                        </AccordionBox>

                                        <AccordionBox>
                                            <ProgressTitle>ReactJS</ProgressTitle>
                                            <ProgressBar
                                                    width="100%"
                                                    height="13px"
                                                    rect
                                                    fontColor="orange"
                                                    percentage="80"
                                                    rectPadding="1px"
                                                    rectBorderRadius="18px"
                                                    trackPathColor="transparent"
                                                    bgColor="#333333"
                                                    defColor={{
                                                        fair: 'orangered',
                                                        good: 'yellow',
                                                        excellent: 'green',
                                                        poor: 'red',
                                                      }}
                                                    trackBorderColor="orange"
                                                />
                                        </AccordionBox>

                                        <AccordionBox>
                                            <ProgressTitle>ReactJS</ProgressTitle>
                                            <ProgressBar
                                                    width="100%"
                                                    height="13px"
                                                    rect
                                                    fontColor="orange"
                                                    percentage="80"
                                                    rectPadding="1px"
                                                    rectBorderRadius="18px"
                                                    trackPathColor="transparent"
                                                    bgColor="#333333"
                                                    defColor={{
                                                        fair: 'orangered',
                                                        good: 'yellow',
                                                        excellent: 'green',
                                                        poor: 'red',
                                                      }}
                                                    trackBorderColor="orange"
                                                />
                                        </AccordionBox>

                                        <AccordionBox>
                                            <ProgressTitle>ReactJS</ProgressTitle>
                                            <ProgressBar
                                                    width="100%"
                                                    height="13px"
                                                    rect
                                                    fontColor="orange"
                                                    percentage="80"
                                                    rectPadding="1px"
                                                    rectBorderRadius="18px"
                                                    trackPathColor="transparent"
                                                    bgColor="#333333"
                                                    defColor={{
                                                        fair: 'orangered',
                                                        good: 'yellow',
                                                        excellent: 'green',
                                                        poor: 'red',
                                                      }}
                                                    trackBorderColor="orange"
                                                />
                                        </AccordionBox>
                                    </Accordion>
                                
                                </Wrapper>
                                <Wrapper>
                                    <Accordion icon={<BsCodeSlash />} title="Backend Development">
                                    Sunlight reaches Earth's atmosphere and is scattered in all directions by
                                    all the gases and particles in the air. Blue light is scattered more than
                                    the other colors because it travels as shorter, smaller waves. This is why
                                    we see a blue sky most of the time.
                                    </Accordion>
                                
                                </Wrapper>
                            </FlexLg>

                            <FlexLg>
                                <Wrapper>
                                    <Accordion icon={<MdOutlineDesignServices/>} title="UI Design">
                                    Sunlight reaches Earth's atmosphere and is scattered in all directions by
                                    all the gases and particles in the air. Blue light is scattered more than
                                    the other colors because it travels as shorter, smaller waves. This is why
                                    we see a blue sky most of the time.
                                    </Accordion>
                                
                                </Wrapper>
                                <Wrapper>
                                    <Accordion icon={<FiDatabase />} title="DevOps">
                                    Sunlight reaches Earth's atmosphere and is scattered in all directions by
                                    all the gases and particles in the air. Blue light is scattered more than
                                    the other colors because it travels as shorter, smaller waves. This is why
                                    we see a blue sky most of the time.
                                    </Accordion>
                                
                                </Wrapper>
                            </FlexLg>

                        </Col>
                        
                    </Row>
                </Col>
            </Row>
        </Container>
    </StyledSection>
  )
}

export default Skills;