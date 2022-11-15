import React from 'react'
import { Col, Container, Row, StyledSection } from '../../styles/GlobalGrid';
import { TypographyDescription, TypographyTitle } from '../../styles/GlobalTypography';
import { Box} from '../../styles/GlobalComponents';
import { AccordionContent, AccordionItem, AccordionTitle, AccordionWrapper, Wrapper } from './Styled';




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
                        <TypographyTitle>SOBRE MIM</TypographyTitle>
                        <TypographyDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, reiciendis?</TypographyDescription>
                    </Box>
                    <Row>
                        <Col>
                            <Wrapper>
                                <Accordion title="Why is the sky blue?">
                                Sunlight reaches Earth's atmosphere and is scattered in all directions by
                                all the gases and particles in the air. Blue light is scattered more than
                                the other colors because it travels as shorter, smaller waves. This is why
                                we see a blue sky most of the time.
                                </Accordion>
                                <Accordion title="What's It Like Inside Jupiter?">
                                It's really hot inside Jupiter! No one knows exactly how hot, but
                                scientists think it could be about 43,000°F (24,000°C) near Jupiter's
                                center, or core.
                                </Accordion>
                                <Accordion title="What Is a Black Hole?">
                                A black hole is an area of such immense gravity that nothing -- not even
                                light -- can escape from it.
                                </Accordion>
                            </Wrapper>
                        </Col>
                        
                    </Row>
                </Col>
            </Row>
        </Container>
    </StyledSection>
  )
}

export default Skills;