import React from 'react'
import { Col, Container, Row, StyledSection } from '../../assets/styles/GlobalGrid';
import { TypographyDescription, TypographyTitle } from '../../assets/styles/GlobalTypography';
import { Box, ButtonPrimary} from '../../assets/styles/GlobalComponents';
import {Bloco, BoxProject, BoxSkills, ButtonProjectLink, CardSlider, CardSliderImage, DescriptionProject, DescriptionProjectStatus, FlexLg} from './Styled';
import BackgroundDsMeta from '../../assets/img/DSMETA.png';
import BackgroundEstudadev from '../../assets/img/estudadev.png'
import BackgroundApiRest from '../../assets/img/api-restfull.png'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { BsGithub, BsLink } from 'react-icons/bs';
import { SiSpring } from 'react-icons/si';


const ProjectInfo = [
    {
        urlProject: "https://github.com/Manrriquez/semana-spring-react",
        titleProject: "Semana Spring React",
        descriptionProject: "Projeto desenvolvido na imersão da Semana spring rest, tendo o backend desenvolvido com spring boot + flyway é o frontend com ReactJS, deploy no Heroku & Netlify.",
        backgroundImage: BackgroundDsMeta,
        status: "FINALIZADO"

    },
    {
        urlProject: "https://github.com/Manrriquez/estudadev-front",
        titleProject: "ESTUDADEV",
        descriptionProject: "Projeto pessoal, a estudadev tem como proposito trazer conhecimento e experiencia reais para iniciantes na área, tendo como inicio o desenvolvimento frontend utilizando ReactJS + Styled-Components + React-router-dom.",
        backgroundImage: BackgroundEstudadev,
        status: "EM ANDAMENTO"

    },
    {
        urlProject: "https://github.com/Manrriquez/starter-restapi",
        titleProject: "Crud SpringBoot",
        descriptionProject: "Projeto desenvolvido no bootcamp oferecido pela JdevTreinamentos, tendo o backend com Spring boot e front html puro e requisições via Ajax com Jquery.",
        backgroundImage: BackgroundApiRest,
        status: "FINALIZADO"

    },
];


const Projects = () => {

    const options = {
        fixedWidth : '100%',
        type   : 'loop',
        arrows: true,
        dots: false,
        width : 1100,
        autoplay     : true,
        pauseOnHover : false,
        resetProgress: false,
        breakpoints: {
            640: {
                perPage: 1,
            },
      },
      };

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
                        
                            <Splide options={ options } aria-labelledby="autoplay-example-heading" hasTrack={ false }>
                                <div style={ { position: 'relative' } }>
                                    <SplideTrack>
                                    {ProjectInfo.map(item => (
                                        <SplideSlide>
                                            <BoxProject>
                                                <FlexLg>
                                                    <Bloco url={item.backgroundImage}></Bloco>
                                                    <div>
                                                        <h3 style={{color: '#393536'}}>{item.titleProject}</h3>
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
                                        </SplideSlide>

                                    ))}
                                    </SplideTrack>
                                </div>
                            </Splide>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </StyledSection>
  )
}

export default Projects;