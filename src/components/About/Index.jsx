import React, { useEffect, useState } from 'react'
import { Col, Container, Row, StyledSection } from '../../styles/GlobalGrid';
import { DescriptionText, ImageJob } from './styled';
import JobImage from '../../img/ImageJob.png'
import { TypographyDescription, TypographyTitle } from '../../styles/GlobalTypography';
import { Box } from '../../styles/GlobalComponents';
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
                            <DescriptionText>Desenvolvedor Full Stack com foco em backend, Ui Design, aficionado por pixel perfect, entregando e desenvolvendo projetos com qualidade.</DescriptionText>
                            <h3>
                                <CountUp end={100} duration="50" />
                            </h3>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </StyledSection>
  )
}

export default About;