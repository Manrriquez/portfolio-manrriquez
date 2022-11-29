import React from 'react'
import { Col, Container, Row, StyledSection } from '../../assets/styles/GlobalGrid';
import { TypographyDescription, TypographyTitle } from '../../assets/styles/GlobalTypography';
import { Box, ButtonPrimary} from '../../assets/styles/GlobalComponents';
import {Bloco, BoxProject, DescriptionProject, DescriptionProjectStatus, FlexLg} from './Styled';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import BackgroundDsMeta from '../../assets/img/DSMETA.png';
import BackgroundEstudadev from '../../assets/img/estudadev.png'
import BackgroundApiRest from '../../assets/img/api-restfull.png'



import { Pagination, Navigation } from "swiper";

const ProjectInfo = [
    {
        urlProject: "https://github.com/Manrriquez/semana-spring-react",
        descriptionProject: "Projeto desenvolvido na imersão da Semana spring rest, tendo o backend desenvolvido com spring boot + flyway é o frontend com ReactJS, deploy no Heroku & Netlify.",
        backgroundImage: BackgroundDsMeta,
        status: "FINALIZADO"

    },
    {
        urlProject: "https://github.com/Manrriquez/estudadev-front",
        descriptionProject: "Projeto pessoal, a estudadev tem como proposito trazer conhecimento e experiencia reais para iniciantes na área, tendo como inicio o desenvolvimento frontend utilizando ReactJS + Styled-Components + React-router-dom.",
        backgroundImage: BackgroundEstudadev,
        status: "EM ANDAMENTO"

    },
    {
        urlProject: "https://github.com/Manrriquez/starter-restapi",
        descriptionProject: "Projeto desenvolvido no bootcamp oferecido pela JdevTreinamentos, tendo o backend com Spring boot e front html puro e requisições via Ajax com Jquery.",
        backgroundImage: BackgroundApiRest,
        status: "FINALIZADO"

    },
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

                            <Swiper slidesPerView={1} spaceBetween={20} slidesPerGroup={1} centeredSlides={true}
                                loop={true} navigation={true} modules={[Pagination, Navigation]} className="mySwiper">

                                {ProjectInfo.map(item => (

                                  <SwiperSlide>
                                      <BoxProject>
                                          <FlexLg>
                                              <Bloco url={item.backgroundImage}></Bloco>
                                              <div>
                                                  <DescriptionProject>{item.descriptionProject}</DescriptionProject>

                                                    <DescriptionProjectStatus>
                                                        <span style={{fontWeight: "600", color: "#393536"}}>STATUS: </span>
                                                        {item.status}
                                                    </DescriptionProjectStatus>
                                                    
                                                    <a href={item.urlProject} target="_blank">
                                                        <ButtonPrimary width="100%">
                                                            VER PROJETO
                                                        </ButtonPrimary>
                                                    </a>
                                              </div>
                                          </FlexLg>
                                      </BoxProject>
                                  </SwiperSlide>
                                  
                                ))}

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