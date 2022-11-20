import React from 'react'
import { Col, Container, Row, StyledSection } from '../../styles/GlobalGrid';
import { TypographyDescription, TypographyTitle } from '../../styles/GlobalTypography';
import { Box, ButtonPrimary} from '../../styles/GlobalComponents';
import {Bloco, BoxProject, DescriptionProject, FlexLg} from './Styled';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import BackgroundDsMeta from '../../img/DSMETA.png';


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
                                            <Bloco url={BackgroundDsMeta}></Bloco>
                                            <div>
                                                <DescriptionProject>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ex distinctio inventore, maxime eligendi omnis!
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ex distinctio inventore, maxime eligendi omnis!
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ex distinctio inventore, maxime eligendi omnis!
                                                </DescriptionProject>
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