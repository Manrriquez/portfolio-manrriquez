import React from 'react'
import { Col, Container, Row, StyledSection } from '../../assets/styles/GlobalGrid';
import { BackgroundServiceSvg, BoxFlex, CardService, CardServiceTypography, TypographyService } from './Styled';
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
            <Col size="10rem">
              <BackgroundServiceSvg url={BackgroundServiceImage}>
                <BoxFlex>
                  <Box>
                      <TypographyService>Quais serviços eu presto</TypographyService>
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo id facilis natus laboriosam, quae reprehenderit!</p>
                  </Box>
                  <BoxFlex gap="25px">
                    <Box>
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
                    <Box>
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
                </BoxFlex>
              </BackgroundServiceSvg>
            </Col>
          </Row>
      </Container>
     </StyledSection>
  )
}

export default Service;