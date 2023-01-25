import React from 'react'
import { Col, Container, Row, StyledSection } from '../../assets/styles/GlobalGrid';
import { TypographyDescription, TypographyTitle } from '../../assets/styles/GlobalTypography';
import { Box, ButtonPrimary} from '../../assets/styles/GlobalComponents';
import {Bloco, BoxProject, DescriptionProject, DescriptionProjectStatus, FlexLg} from './Styled';
import BackgroundDsMeta from '../../assets/img/DSMETA.png';
import BackgroundEstudadev from '../../assets/img/estudadev.png'
import BackgroundApiRest from '../../assets/img/api-restfull.png'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';


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

    const options = {
        rewind : true,
        fixedWidth : '100%',
        type   : 'loop',
        padding: '20%',
        fixedHeight: '8rem',
        width : 1100,
        autoplay     : true,
        pauseOnHover : false,
        resetProgress: false,
        breakpoints: {
            640: {
                perPage: 1,
            },
      },
        height       : '15rem',
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
                        
                            <Splide
                                options={ options }
                                aria-labelledby="autoplay-example-heading"
                                hasTrack={ false }
                            >
                                <div style={ { position: 'relative' } }>
                                <SplideTrack>
                                    <SplideSlide>
                                        <div style={{backgroundColor: 'black', paddingLeft: '20px', paddingRight: '20px'}}>
                                            <img src={BackgroundDsMeta} alt="" />
                                        </div>
                                        <div style={{backgroundColor: 'black', paddingLeft: '20px', paddingRight: '20px'}}>
                                            <img src={BackgroundDsMeta} alt="" />
                                        </div>
                                        <div style={{backgroundColor: 'black', paddingLeft: '20px', paddingRight: '20px'}}>
                                            <img src={BackgroundDsMeta} alt="" />
                                        </div>
                                        <div style={{backgroundColor: 'black', paddingLeft: '20px', paddingRight: '20px'}}>
                                            <img src={BackgroundDsMeta} alt="" />
                                        </div>
                                    </SplideSlide>
                                </SplideTrack>
                                </div>

                                <div className="splide__progress">
                                <div className="splide__progress__bar" />
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