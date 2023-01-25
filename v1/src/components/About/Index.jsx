import React, { useEffect, useState } from 'react'
import { Col, Container, Row, StyledSection } from '../../assets/styles/GlobalGrid';
import { BoxFlex, BoxItem, DescriptionText, ImageJob, NumberCounterText, TextCounterDescription } from './styled';
import JobImage from '../../assets/img/ImageJob.png'
import { TypographyDescription, TypographyTitle } from '../../assets/styles/GlobalTypography';
import { Box, ButtonPrimary } from '../../assets/styles/GlobalComponents';
import CountUp from 'react-countup';
import Curriculum from '../../assets/files/CV.pdf';



const About = () => {

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setCounter((counter) => counter + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);
    
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
                                </BoxFlex>

                                <BoxFlex>

                                     <a href={Curriculum} download="CV" target='_blank' style={{width: "100%"}}>
                                        <ButtonPrimary width="100%">BAIXAR CV</ButtonPrimary>
                                     </a>
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