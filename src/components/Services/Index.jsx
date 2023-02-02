import React from 'react'
import { Col, Container, Row, StyledSection } from '../../assets/styles/GlobalGrid';
import { BackgroundServiceSvg, BoxFlex, BoxFlexService, BoxService, CardService, CardServiceTypography, TypographyDescriptionService,TypographyTitleService } from './Styled';
import BackgroundServiceImage from '../../assets/img/background-geometric.svg'
import { Box } from '../../assets/styles/GlobalComponents';
import { keyframes } from 'styled-components';
import { BsCodeSlash, BsFront } from 'react-icons/bs';
import { BiCodeCurly } from 'react-icons/bi';
import { FiDatabase } from 'react-icons/fi';
import { MdOutlineDesignServices } from 'react-icons/md';


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


const Service = () => {
  return (
     <StyledSection>
        <Container>
          <Row>
            <Col size="11rem">
              <BackgroundServiceSvg url={BackgroundServiceImage}>
                <BoxFlexService>
                  <BoxService>
                      <TypographyTitleService>Quais serviços eu ofereço?</TypographyTitleService>
                      <TypographyDescriptionService>Estes são alguns serviços que ofereço como programador,
                       tendo como foco as tecnologias ReactJS, Java, Figma e seus ecossistema.</TypographyDescriptionService>
                  </BoxService>
                  <BoxFlex gap="25px">
                    <Box top="25px">
                      <CardService animation={AnimatedIcon}>
                        <CardServiceTypography>
                          <BiCodeCurly />
                          <p>Front-End</p>
                        </CardServiceTypography>
                      </CardService>
                      <CardService animation={AnimatedIcon1}>
                        <CardServiceTypography>
                          <MdOutlineDesignServices />
                          <p>Ui Design</p>
                        </CardServiceTypography>
                      </CardService>
                    </Box>
                    <Box bottom="35px">
                        <CardService animation={AnimatedIcon1}>
                          <CardServiceTypography>
                            <FiDatabase />
                            <p>DevOps</p>
                          </CardServiceTypography>
                        </CardService>
                        <CardService animation={AnimatedIcon}>
                          <CardServiceTypography>
                            <BsCodeSlash />
                            <p>Back-End</p>
                          </CardServiceTypography>
                        </CardService>
                    </Box>
                  </BoxFlex>
                </BoxFlexService>
              </BackgroundServiceSvg>
            </Col>
          </Row>
      </Container>
     </StyledSection>
  )
}

export default Service;