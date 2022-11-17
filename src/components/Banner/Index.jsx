import React from 'react'
import { Col, Container, Row, StyledSection } from '../../styles/GlobalGrid';
import {Bloco, Box, BoxBanner, ButtonSecondary, CardBanner, ContactImage, FlexLg, TypographyBanner} from './Styled';
import ImageContact from '../../img/contato.png'


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
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                    Corrupti recusandae quas mollitia voluptatibus doloremque.
                                    Totam illum minima cum veniam quis.
                                </TypographyBanner>
                                <ButtonSecondary>ENTRAR EM CONTATO</ButtonSecondary>
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