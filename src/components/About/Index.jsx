import React from 'react'
import { Col, Container, Row, StyledSection } from '../../styles/GlobalGrid';
import { BoxFlex, BoxItem, DescriptionText, ImageJob, NumberCounterText, TextCounterDescription } from './styled';
import JobImage from '../../img/ImageJob.png'
import { TypographyDescription, TypographyTitle } from '../../styles/GlobalTypography';
import { Box, ButtonPrimary } from '../../styles/GlobalComponents';
import CountUp from 'react-countup';



const About = () => {
    
  return (
    <StyledSection id="about">
        <Container>
            <Row>
                <Col size='10rem'>
                    <Box>
                        <TypographyTitle>SOBRE MIM</TypographyTitle>
                        <TypographyDescription>
                            Uma breve introdução sobre eu, minhas perspectivas de futuro e paixões sobre o mundo tecnologico.
                        </TypographyDescription>
                    </Box>
                    <Row>
                        <Col>
                            <ImageJob src={JobImage} />
                        </Col>
                        <Col>
                            <BoxItem>
                                <DescriptionText>
                                    Desenvolvedor Full Stack com foco em backend, Ui Design, aficionado por pixel perfect,
                                     Iniciei minha carreira por volta de 2021, estudando no modo auto didata, sempre fui curioso,
                                     nunca me contentei em apenas uma área e por conta disto posso dizer com clareza o quão 
                                     satisfatorio tem sido mergulhar neste mar de possibilidades, conhecimentos e afins. 
                                </DescriptionText>
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