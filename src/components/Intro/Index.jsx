import React from 'react'
import { ButtonPrimary } from '../../styles/GlobalComponents';
import { Col, Container, Row, StyledSection } from '../../styles/GlobalGrid';
import {HomeDescription, HomeSubtitle, HomeTitle, BackgroundFound, IconAnimatedJava,
     IconAnimatedHttps, IconAnimatedApp, IconAnimatedMysql } from './Styled';
import PersonalHome from '../../img/IMAGE-HOME.png'
import IconJava from '../../img/JavaIcon.png'
import IconHttps from '../../img/HttpsIcon.png'
import IconApp from '../../img/AppIcon.png'
import IconMysql from '../../img/MySqlIcon.png'



const Intro = () => {
  return (
    <StyledSection>
        <Container>
            <Row>
                <Col size="4rem">
                    <div>
                        <HomeSubtitle>Olá me chamo</HomeSubtitle>
                        <HomeTitle>LUIS FERNANDO</HomeTitle>
                        <HomeDescription>
                            Desenvolvedor Full Stack com foco em back-end, sempre em busca de conhecimento, acreditando que sempre há o que melhorar e refatorar seu codigo.
                        </HomeDescription>
                        <br />
                        <ButtonPrimary>ENTRE EM CONTATO</ButtonPrimary>
                    </div>
                </Col>
                <Col size="4rem">
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