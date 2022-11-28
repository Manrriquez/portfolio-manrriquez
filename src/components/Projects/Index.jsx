import React from 'react'
import { Col, Container, Row, StyledSection } from '../../assets/styles/GlobalGrid';
import { TypographyDescription, TypographyTitle } from '../../assets/styles/GlobalTypography';
import { Box, ButtonPrimary} from '../../assets/styles/GlobalComponents';
import {Bloco, BoxProject, DescriptionProject, FlexLg} from './Styled';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import BackgroundDsMeta from '../../assets/img/DSMETA.png';


import { Pagination, Navigation } from "swiper";

const ProjectInfo = [
    {
        urlProject: "https://localdlsa.com",
        descriptionProject: "LOREM IPSUIUM AMET LOREM DSAD",
        backgroundImage: {BackgroundDsMeta},

    },
    {
        urlProject: "https://localdlsa.com",
        descriptionProject: "LOrempsuh",
        backgroundImage: {BackgroundDsMeta},

    },
    {
        urlProject: "https://localdlsa.com",
        descriptionProject: "DKOOPPPDSAKDPSADLOQKIKSQQKSADAKSDOSAIJD DSADJAISDSAODSAI DISAJDIJSADOIAJS IJDISAJDIOSAJ",
        backgroundImage: {BackgroundDsMeta},

    },
    {
        urlProject: "https://localdlsa.com",
        descriptionProject: "LOrempsuh",
        backgroundImage: {BackgroundDsMeta},

    }
];


const Projects = () => {


  return (
    <StyledSection id="projects">
        <Container>
            <Row>
                <Col size='10rem'>
                    <Box>
                        <TypographyTitle>PROJETOS</TypographyTitle>
                        <TypographyDescription>
                            Seção redirecionada para projetos realizados pela minha trilha ao full stack, qualquer duvida não deixe de me contactar!
                        </TypographyDescription>
                    </Box>
                    <Row>
                        <Col>
                            
                            {ProjectInfo.map(item => (
                               <Swiper slidesPerView={1} spaceBetween={20} slidesPerGroup={1} centeredSlides={true}
                                loop={true} navigation={true} modules={[Pagination, Navigation]} className="mySwiper">
                                  <SwiperSlide>
                                      <BoxProject>
                                          <FlexLg>
                                              <Bloco url={item.backgroundImage}></Bloco>
                                              <div>
                                                  <DescriptionProject>{item.descriptionProject}</DescriptionProject>
                                                  <ButtonPrimary width="100%" href={item.urlProject}>VER PROJETO</ButtonPrimary>
                                              </div>
                                          </FlexLg>
                                      </BoxProject>
                                  </SwiperSlide>
                              </Swiper>
                            ))}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </StyledSection>
  )
}

export default Projects;