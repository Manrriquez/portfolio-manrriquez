import React, { useEffect, useState } from 'react'
import { Col, Container, Row, StyledSection } from '../../assets/styles/GlobalGrid';
import { BoxFlex, BoxItem, CardAboutExperience, CardAboutExperienceSvg, DescriptionText, ImageJob, ListAboutExperience, ListItemAboutExperience, NumberCounterText, Tab, TabContent, Tabs, TextCounterDescription } from './styled';
import JobImage from '../../assets/img/ImageJob.png'
import { TypographyDescription, TypographyTitle } from '../../assets/styles/GlobalTypography';
import { Box, ButtonPrimary } from '../../assets/styles/GlobalComponents';
import CountUp from 'react-countup';
import Curriculum from '../../assets/files/CV.pdf';
import { BoxFLex } from '../Contact/Styled';
import { BsBook, BsBuilding } from 'react-icons/bs';
import { AiOutlineCoffee, AiOutlineProject, AiOutlineUser } from 'react-icons/ai'



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
                <Col size='18rem'>
                    {/*
                        <Box>
                            <TypographyTitle>SOBRE MIM</TypographyTitle>
                            <TypographyDescription>
                                Uma breve introdução sobre eu, minhas perspectivas de futuro e paixões sobre o mundo tecnologico.
                            </TypographyDescription>
                        </Box>
                    */}
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
                                                Luis Fernando é um desenvolvedor apaixonado por tecnologia e atualmente trabalha como
                                                desenvolvedor front-end. No entanto, ele está em uma transição de carreira para o
                                                desenvolvimento back-end. Luis começou como um auto didata, sempre buscando aprender
                                                e aprimorar suas habilidades. Ele tem experiência em tecnologias front-end como
                                                ReactJS, Javascript, Typescript, Sass, Bootstrap, Tailwind, Figma, Github, Styled-Components,
                                                Material UI e Wordpress, e está se expandindo para tecnologias back-end como Java,
                                                Spring Boot, Spring Security, Spring Data, JPA, MySQL, Docker, testes, Clean
                                                Architecture, API REST e outros. A paixão de Luis pela tecnologia e seu espírito
                                                de auto aprendizado o levaram a se tornar um desenvolvedor altamente capacitado
                                                 e sempre buscando novas oportunidades para crescer e evoluir.
                                            </DescriptionText>
                                            <BoxFlex>
                                                <a href={Curriculum} download="CV" target='_blank' style={{width: "100%"}}>
                                                    <ButtonPrimary width="100%">BAIXAR CV</ButtonPrimary>
                                                </a>
                                            </BoxFlex>

                                        </BoxItem>
                                    </Col>
                                </Row>
                                
                            </TabContent>
                            <TabContent active={active === 1}>
                                <Row style={{alignItems: 'start'}}>
                                    <Col>
                                        <h5 style={{color: '#FCA61F', marginBottom: '7px'}}>Minha carreira</h5>
                                        <h2 style={{color: '#393536', marginBottom: '15px'}}>PORQUE ME CONTRATAR?</h2>
                                        <DescriptionText>
                                            Experiência como desenvolvedor, posso trazer uma combinação
                                            valiosa de habilidades técnicas e habilidades interpessoais para sua equipe. Meus
                                            conhecimentos em front-end e back-end me permitem desenvolver soluções de interface
                                            do usuário altamente interativas, atrativas e funcionais. Além disso, minha paixão por tecnologia
                                            e minha abordagem de aprendizagem autodidata significa que estou sempre em busca de maneiras
                                            de me aperfeiçoar e expandir meus conhecimentos.
                                        </DescriptionText>
                                        <h4 style={{color: '#393536', marginBottom: '15px', marginTop: '20px'}}>Principais soft skills:</h4>
                                        <ListAboutExperience>
                                            <ListItemAboutExperience>
                                                Mentalidade de solução: foco em soluções e na entrega de valor para o cliente, em vez de simplesmente seguir processos e protocolos.
                                            </ListItemAboutExperience>
                                            <ListItemAboutExperience>
                                                Resolução de problemas: capacidade de identificar, analisar e solucionar problemas de maneira eficiente.
                                            </ListItemAboutExperience>
                                            <ListItemAboutExperience>
                                                Tomada de decisão: habilidade para tomar decisões informadas e eficazes, mesmo em situações de incerteza.
                                            </ListItemAboutExperience>
                                            <ListItemAboutExperience>
                                              Adaptabilidade: capacidade de se adaptar rapidamente a mudanças tecnológicas e a novos projetos.
                                            </ListItemAboutExperience>
                                            <ListItemAboutExperience>
                                             Comunicação clara e efetiva: capacidade de se comunicar de forma clara e eficaz, tanto com colegas quanto com clientes.
                                            </ListItemAboutExperience>
                                        </ListAboutExperience>
                                        
                                    </Col>
                                    <Col>
                                        <BoxItem style={{float: 'right'}}>
                                            <CardAboutExperience>
                                                <CardAboutExperienceSvg><AiOutlineUser /></CardAboutExperienceSvg>
                                                <div>
                                                    <p style={{color: '#FCA61F'}}>Idade</p>
                                                    <strong>20 ANOS</strong>
                                                </div>
                                            </CardAboutExperience>
                                            <CardAboutExperience>
                                                <CardAboutExperienceSvg><BsBuilding /></CardAboutExperienceSvg>
                                                <div>
                                                    <p style={{color: '#FCA61F'}}>Experiencia</p>
                                                    <strong>1+ ANO</strong>
                                                </div>
                                            </CardAboutExperience>
                                            <CardAboutExperience>
                                                <CardAboutExperienceSvg><AiOutlineProject /></CardAboutExperienceSvg>
                                                <div>
                                                    <p style={{color: '#FCA61F'}}>Projetos</p>
                                                    <strong>13+ FINALIZADO</strong>
                                                </div>
                                            </CardAboutExperience>
                                            <CardAboutExperience>
                                                <CardAboutExperienceSvg><BsBook /></CardAboutExperienceSvg>
                                                <div>
                                                    <p style={{color: '#FCA61F'}}>Estudos</p>
                                                    <strong>400+ HORAS</strong>
                                                </div>
                                            </CardAboutExperience>
                                            <CardAboutExperience>
                                                <CardAboutExperienceSvg><AiOutlineCoffee /></CardAboutExperienceSvg>
                                                <div>
                                                    <p style={{color: '#FCA61F'}}>Café</p>
                                                    <strong>346+ COPOS</strong>
                                                </div>
                                            </CardAboutExperience>
                                            <a href="#projects" style={{width: "100%"}}>
                                                    <ButtonPrimary width="100%" style={{marginTop: '35px'}}>VER PROJETOS</ButtonPrimary>
                                            </a>
                                        </BoxItem>
                                    </Col>
                                </Row>
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