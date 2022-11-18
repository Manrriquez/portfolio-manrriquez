import React from 'react'
import { Col, Container, Row, StyledSection } from '../../styles/GlobalGrid';
import { TypographyDescription, TypographyTitle } from '../../styles/GlobalTypography';
import { Box, ButtonPrimary} from '../../styles/GlobalComponents';
import {Bloco, BoxProject, FlexLg} from './Styled';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { Pagination, Navigation } from "swiper";




const Projects = () => {


  return (
    <StyledSection>
        <Container>
            <Row>
                <Col size='10rem'>
                    <Box>
                        <TypographyTitle>HABILIDADES</TypographyTitle>
                        <TypographyDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, reiciendis?</TypographyDescription>
                    </Box>
                    <Row>
                        <Col>
                        <Swiper
                                slidesPerView={1}
                                spaceBetween={20}
                                slidesPerGroup={1}
                                centeredSlides={true}
                                loop={true}
                                navigation={true}
                                modules={[Pagination, Navigation]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <BoxProject>
                                        <FlexLg>
                                            <Bloco></Bloco>
                                            <div>
                                                <p style={{maxWidth: "500px", marginBottom: "25px", textAlign: "initial"}}>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ex distinctio inventore, maxime eligendi omnis!
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ex distinctio inventore, maxime eligendi omnis!
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ex distinctio inventore, maxime eligendi omnis!
                                                </p>
                                                <ButtonPrimary width="100%">VER PROJETO</ButtonPrimary>
                                            </div>
                                        </FlexLg>
                                    </BoxProject>
                                </SwiperSlide>
                            </Swiper>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </StyledSection>
  )
}

export default Projects;