import React from 'react'
import { Col, Container, Row, StyledSection } from '../../styles/GlobalGrid';
import { BoxFlex, BoxItem, DescriptionText, ImageJob, NumberCounterText, TextCounterDescription } from './styled';
import JobImage from '../../img/ImageJob.png'
import { TypographyDescription, TypographyTitle } from '../../styles/GlobalTypography';
import { Box, ButtonPrimary } from '../../styles/GlobalComponents';
import CountUp from 'react-countup';



const About = () => {
    
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
                            <ImageJob src={JobImage} />
                        </Col>
                        <Col>
                            <BoxItem>
                                <DescriptionText>Desenvolvedor Full Stack com foco em backend, Ui Design, aficionado por pixel perfect, entregando e desenvolvendo projetos com qualidade.</DescriptionText>
                                <BoxFlex>
                                    <BoxItem>
                                        <NumberCounterText>
                                            <CountUp end={1} durantion="200" />+
                                        </NumberCounterText>
                                        <TextCounterDescription>Ano <br /> de experiência</TextCounterDescription>
                                    </BoxItem>

                                    <BoxItem>
                                        <NumberCounterText>
                                            <CountUp end={15} durantion="200" />+
                                        </NumberCounterText>
                                        <TextCounterDescription>Projetos <br /> Finalizados</TextCounterDescription>
                                    </BoxItem>
                                </BoxFlex>
                                <BoxFlex>
                                <ButtonPrimary width="80%">BAIXAR CV</ButtonPrimary>
                                </BoxFlex>
                            </BoxItem>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </StyledSection>
  )
}

export default About;