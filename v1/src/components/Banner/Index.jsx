import React from 'react'
import { Col, Container, Row, StyledSection } from '../../assets/styles/GlobalGrid';
import {Bloco, Box, BoxBanner, ButtonSecondary, CardBanner, ContactImage, FlexLg, TypographyBanner} from './Styled';
import ImageContact from '../../assets/img/contato.png'


const Banner = () => {


  return (
    <StyledSection>
        <Container>
            <Row>
                <Col size='10rem'>
                    <CardBanner>
                        <FlexLg>
                            <BoxBanner>
                                <TypographyBanner>
                                   Estou disponivel para trabalhos Full-time, Part-time e Freelancer, seja remoto ou presencial,
                                    Vamos conversar?
                                   Acredito ter autonomia para participar no desenvolvimento de
                                     projetos reais com metodologias agéis. <br />
                                   Caso por ventura eu não tenha ou sequer possa ter dificuldade, procuro aprender e me aprimorar para voltar e desenvolver com
                                   maestria, ninguem nasce sabendo de tudo, tudo se aprende e se aprimora, como dizem por ai <strong>"todo sênior já foi um junior"</strong>, 
                                   dito isto, clique no botão abaixo e vamos bater um papo!
                                </TypographyBanner>
                                <a href="#contact">
                                    <ButtonSecondary>ENTRAR EM CONTATO</ButtonSecondary>
                                </a>
                            </BoxBanner>
                            <BoxBanner>
                                <ContactImage src={ImageContact} />
                            </BoxBanner>
                        </FlexLg>
                    </CardBanner>
                </Col>
            </Row>
        </Container>
    </StyledSection>
  )
}

export default Banner;