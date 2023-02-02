import React, { useEffect, useState } from 'react'
import { Col, Container, Row, StyledSection } from '../../assets/styles/GlobalGrid';
import { BoxFlex, BoxItem, DescriptionText, ImageJob, NumberCounterText, Tab, TabContent, Tabs, TextCounterDescription } from './styled';
import JobImage from '../../assets/img/ImageJob.png'
import { TypographyDescription, TypographyTitle } from '../../assets/styles/GlobalTypography';
import { Box, ButtonPrimary } from '../../assets/styles/GlobalComponents';
import CountUp from 'react-countup';
import Curriculum from '../../assets/files/CV.pdf';



const About = () => {

    const [active, setActive] = useState(0);
    const handleClick = e => {
        const index = parseInt(e.target.id, 0);
        if (index !== active) {
        setActive(index);
        }
    };
    
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
                            <BoxItem>
                            <Tabs>
                                <Tab onClick={handleClick} active={active === 0} id={0}>
                                    <strong>Conheça um pouco sobre mim!</strong>
                                    <br />
                                    Transformar sonhos em realidade com projetos de alta qualidade e o meu objetivo!
                                </Tab>

                                <Tab onClick={handleClick} active={active === 1} id={1}>
                                    <strong>Por que trabalhar comigo?</strong>
                                    <br />
                                    Em prol de atingir o apicé da eficiencia em projetos reais e sempre em busca do aprimoramento!
                                </Tab>
                            </Tabs>
                            </BoxItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <BoxItem>
                            <TabContent active={active === 0}>
                                <Row>
                                    <Col>
                                        <ImageJob src={JobImage} alt="Figura de 2D animada"/>
                                    </Col>
                                    <Col>
                                        <BoxItem>
                                            <h5 style={{color: '#FCA61F', marginBottom: '7px'}}>Sobre mim</h5>
                                            <h2 style={{color: '#393536', marginBottom: '15px'}}>QUEM E LUIS FERNANDO?</h2>
                                            <DescriptionText>
                                                Desenvolvedor Full Stack com foco em backend, Ui Design, aficionado por pixel perfect,
                                                Iniciei minha carreira por volta de 2021, estudando no modo auto didata, sempre fui curioso,
                                                nunca me contentei em apenas uma área e por conta disto posso dizer com clareza o quão 
                                                satisfatorio tem sido mergulhar neste mar de possibilidades, conhecimentos e afins. 
                                            </DescriptionText>
                                            <BoxFlex>
                                                <a href={Curriculum} download="CV" target='_blank' style={{width: "100%"}}>
                                                    <ButtonPrimary width="100%">BAIXAR CV</ButtonPrimary>
                                                </a>
                                            </BoxFlex>

                                        </BoxItem>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <BoxItem>
                                        <BoxFlex>
                                                <BoxItem>
                                                    <NumberCounterText>
                                                        1+
                                                    </NumberCounterText>
                                                    <TextCounterDescription>Ano <br /> de experiência</TextCounterDescription>
                                                </BoxItem>

                                                <BoxItem>
                                                    <NumberCounterText>
                                                        <CountUp end={13} duration={14.75} />+
                                                    </NumberCounterText>
                                                    <TextCounterDescription>Projetos <br /> Finalizados</TextCounterDescription>
                                                </BoxItem>

                                                <BoxItem>
                                                    <NumberCounterText>
                                                        <CountUp end={13} duration={14.75} />+
                                                    </NumberCounterText>
                                                    <TextCounterDescription>Projetos <br /> Finalizados</TextCounterDescription>
                                                </BoxItem>
                                            </BoxFlex>
                                        </BoxItem>
                                    </Col>
                                </Row>
                            </TabContent>
                            <TabContent active={active === 1}>
                                <h1>Content 2</h1>
                            </TabContent>
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