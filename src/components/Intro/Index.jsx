import React from 'react'
import { ButtonPrimary } from '../../assets/styles/GlobalComponents';
import { Col, Container, Row, StyledSection } from '../../assets/styles/GlobalGrid';
import {HomeDescription, HomeSubtitle, HomeTitle, BackgroundFound, IconAnimatedJava,
     IconAnimatedHttps, IconAnimatedApp, IconAnimatedMysql } from './Styled';
import PersonalHome from '../../assets/img/IMAGE-HOME.png'
import IconJava from '../../assets/img/JavaIcon.png'
import IconHttps from '../../assets/img/HttpsIcon.png'
import IconApp from '../../assets/img/AppIcon.png'
import IconMysql from '../../assets/img/MySqlIcon.png'



const Intro = () => {
  return (
    <StyledSection>
        <Container>
            <Row>
                <Col size="clamp(10rem, 3vw, 14rem)">
                    <div>
                        <HomeSubtitle>Olá me chamo</HomeSubtitle>
                        <HomeTitle>LUIS FERNANDO</HomeTitle>
                        <HomeDescription>
                            Desenvolvedor Full Stack com foco em back-end, sempre em busca de conhecimento, acreditando que sempre há o que melhorar e refatorar seu codigo.
                        </HomeDescription>
                        <br />
                        <ButtonPrimary href="#contact">ENTRE EM CONTATO</ButtonPrimary>
                    </div>
                </Col>
                <Col size="clamp(10rem, 3vw, 14rem)">
                    <div>
                        <BackgroundFound url={PersonalHome}>
                            <IconAnimatedJava src={IconJava}/>
                            <IconAnimatedHttps src={IconHttps}/>
                            <IconAnimatedApp src={IconApp}/>
                            <IconAnimatedMysql src={IconMysql}/>
                        </BackgroundFound>
                    </div>
                </Col>
            </Row>
        </Container>
    </StyledSection>
  )
}

export default Intro;