import React from 'react'
import { ButtonPrimary } from '../../assets/styles/GlobalComponents';
import { Col, Container, Row, StyledSection } from '../../assets/styles/GlobalGrid';
import {HomeDescription, HomeSubtitle, HomeTitle, BackgroundFound, IconAnimated} from './Styled';
import PersonalHome from '../../assets/img/IMAGE-HOME.png'
import IconJava from '../../assets/img/JavaIcon.png'
import IconHttps from '../../assets/img/HttpsIcon.png'
import IconApp from '../../assets/img/AppIcon.png'
import IconMysql from '../../assets/img/MySqlIcon.png'
import { keyframes } from 'styled-components';
import SpinnerRoundedAnimation from '../SpinnerRoundedAnimation/Index';


const AnimatedIcon = keyframes`

	0%,
	100% {
		transform: translateY(0);
	}

	10%,
	30%,
	50%,
	70% {
		transform: translateY(-8px);
	}

	20%,
	40%,
	60% {
		transform: translateY(8px);
	}

	80% {
		transform: translateY(6.4px);
	}

	90% {
		transform: translateY(-6.4px);
	}
`;

const AnimatedIcon1 = keyframes`

	0%,
	100% {
		transform: translateY(0);
	}

	10%,
	30%,
	50%,
	70% {
		transform: translateY(8px);
	}

	20%,
	40%,
	60% {
		transform: translateY(-8px);
	}

	80% {
		transform: translateY(-6.4px);
	}

	90% {
		transform: translateY(6.4px);
	}
`;


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
                        <a href="#contact">
                            <ButtonPrimary>ENTRE EM CONTATO</ButtonPrimary>
                        </a>
                    </div>
                </Col>
                <Col size="clamp(10rem, 3vw, 14rem)">
                    <div>
                        <SpinnerRoundedAnimation />
                    </div>
                </Col>
            </Row>
        </Container>
    </StyledSection>
  )
}

export default Intro;