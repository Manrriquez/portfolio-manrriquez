import React from 'react'
import { Col, Container, Row, StyledSection } from '../../styles/GlobalGrid';
import { TypographyDescription, TypographyTitle } from '../../styles/GlobalTypography';
import { Box} from '../../styles/GlobalComponents';
import {BoxEducation, BoxTimeline, FlexLg, TextEducation} from './Styled';
import { Chrono } from 'react-chrono';
import { BsBag, BsBook} from 'react-icons/bs'

const items = [
    {
      title: "05/2021 até 12/2021",
      cardTitle: "Bootcamp",
      cardSubtitle:
        "Desenvolvimento Web Full Stack",
      cardDetailedText: `Desenvolvimento Web Full Stack, oferecido pela NewTab Academy, com foco nas tecnologias PHP + Laravel + React
      + MYSQL + GIT, e projetos em grupos para interação dos ingressantes e simular o dia a dia de um dev utilizando
       metodologias agéis, assim tendo como finalização de bootcamp em dezembro de 2021.`
    },
    {
      title: "10/2021 Atual",
      cardTitle: "Estagio",
      cardSubtitle: `Desenvolvimento Web Front-end`,
      cardDetailedText: `Estagiario Front-end na empresa PillBiz AG, tendo a principio demandas como manuntenção e a criação de ladingpages & blogs & sistemas web,
      assim após 4 meses de tendo promoção como Desenvolvedor Front-end Junior, participando ativamente no desenvolvimento front-end, tecnologias utilizadas React + NodeJS + SASS + BOOSTRAP 5 + STYLED-COMPONENTS`
    },
    {
      title: "04/2021 até 12/2023",
      cardTitle: "Faculdade",
      cardSubtitle: `Analise e Desenvolvimento de Sistemas`,
      cardDetailedText: `Iniciando Analise e Desenvolvimento de Sistemas EAD na Anhembi Morumbi em março de 2021,
      Tendo compromisso nas entregas de provas, aulas e projetos, a principio procurando ter maestria nas atividades em questão, 
      mas atualmente encontra trancado no 3 Semestre, mas com volta 
      agendada para o incio de 2023 no modo presencial no periodo noturno.`
    },
    {
      title: "01/2022 até 06/2022",
      cardTitle: "Frellancer",
      cardSubtitle: `Desenvolvimento Web Full Stack`,
      cardDetailedText: `Frellancer com Desenvolvimento Web, tendo a principio demandas ativamente no desenvolvimento front-end e participações no
      no desenvolvimento back-end, utilizando as tecnologias PHP + LARAVEL + VUEJS + INERTIAJS + TAILWIND + BOOTSTRAP, seguindo sempre
      as boas praticas e mantendo principios SOLID em busca de sempre me aprimorar há cada projeto.`
    },
    {
      title: "11/2022 Atual",
      cardTitle: "Bootcamp",
      cardSubtitle: `Desenvolvimento Web Full Stack Java`,
      cardDetailedText: `Bootcamp Desenvolvimento Web Full Stack Java oferecido pelo JdevTreinamentos, Inicio de Bootcamp atualmente no modulo de SpringBoot, realizando
      ativamente projetos com base nos meus conhecimentos, firmante fortemente os estudos nas stack's de Java + Spring
      Boot + Docker + Swagger, estudando também por cursos pela udemy com foco no desenvolvimento back-end Java.`
    },
  ];


const Education = () => {
    
  return (
    <StyledSection>
        <Container>
            <Row>
                <Col size='10rem'>
                    <Box>
                        <TypographyTitle>TIMELINE</TypographyTitle>
                        <TypographyDescription>
                          Segue sendo essa seção uma breve introdução ao longo
                          dos tempos da minha carreira & educação podendo ainda se extender ao passar do tempo.
                        </TypographyDescription>
                    </Box>
                    <Row>
                        <Col size="5rem">

                            <BoxEducation>
                               <TextEducation>
                                    <BsBook />
                                    Educação
                                </TextEducation>

                                <TextEducation>
                                    <BsBag />
                                    Carreira
                              </TextEducation>
                            </BoxEducation>

                            <FlexLg>
                              <BoxTimeline>
                                <Chrono items={items} theme={{
                                        primary: '#393536',
                                        secondary: '#FCA61F',
                                        cardBgColor: '#FFFF',
                                        cardForeColor: '#393536',
                                        titleColor: '#393536',
                                        titleColorActive: '#393536',
                                    }} mode="VERTICAL_ALTERNATING" />
                              </BoxTimeline>
                            </FlexLg>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </StyledSection>
  )
}

export default Education;