import React from 'react'
import { Col, Container, Row, StyledSection } from '../../styles/GlobalGrid';
import { TypographyDescription, TypographyTitle } from '../../styles/GlobalTypography';
import { Box} from '../../styles/GlobalComponents';
import {Bloco, FlexLg} from './Styled';
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
                                <SwiperSlide><Bloco></Bloco></SwiperSlide>
                                <SwiperSlide><Bloco></Bloco></SwiperSlide>
                                <SwiperSlide><Bloco></Bloco></SwiperSlide>
                                <SwiperSlide><Bloco></Bloco></SwiperSlide>
                                <SwiperSlide><Bloco></Bloco></SwiperSlide>
                                <SwiperSlide><Bloco></Bloco></SwiperSlide>
                                <SwiperSlide><Bloco></Bloco></SwiperSlide>
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