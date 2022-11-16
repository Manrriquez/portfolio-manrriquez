import React from 'react'
import { Col, Container, Row, StyledSection } from '../../styles/GlobalGrid';
import { TypographyDescription, TypographyTitle } from '../../styles/GlobalTypography';
import { Box} from '../../styles/GlobalComponents';
import { AccordionContent, AccordionItem, AccordionTitle, AccordionWrapper, FlexLg, Wrapper } from './Styled';




const Accordion = ({ title, children }) => {

    const [isOpen, setOpen] = React.useState(false);

    return (
        <AccordionWrapper>
            <AccordionTitle
             className={`${isOpen ? "open" : ""}`} onClick={() => setOpen(!isOpen)}>
                {title}
            </AccordionTitle>
            <AccordionItem className={`${!isOpen ? "collapsed" : ""}`}>
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
                        <TypographyTitle>HABILIDADES</TypographyTitle>
                        <TypographyDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, reiciendis?</TypographyDescription>
                    </Box>
                    <Row>
                        <Col>
                            <FlexLg>
                                <Wrapper>
                                    <Accordion title="{} Frontend Development">
                                    Sunlight reaches Earth's atmosphere and is scattered in all directions by
                                    all the gases and particles in the air. Blue light is scattered more than
                                    the other colors because it travels as shorter, smaller waves. This is why
                                    we see a blue sky most of the time.
                                    </Accordion>
                                
                                </Wrapper>
                                <Wrapper>
                                    <Accordion title="</> Backend Development">
                                    Sunlight reaches Earth's atmosphere and is scattered in all directions by
                                    all the gases and particles in the air. Blue light is scattered more than
                                    the other colors because it travels as shorter, smaller waves. This is why
                                    we see a blue sky most of the time.
                                    </Accordion>
                                
                                </Wrapper>
                            </FlexLg>

                            <FlexLg>
                                <Wrapper>
                                    <Accordion title="{*} UI Design">
                                    Sunlight reaches Earth's atmosphere and is scattered in all directions by
                                    all the gases and particles in the air. Blue light is scattered more than
                                    the other colors because it travels as shorter, smaller waves. This is why
                                    we see a blue sky most of the time.
                                    </Accordion>
                                
                                </Wrapper>
                                <Wrapper>
                                    <Accordion title="{$} DevOps">
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