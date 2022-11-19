import React from 'react'
import { Col, Container, Row, StyledSection } from '../../styles/GlobalGrid';
import { TypographyDescription, TypographyTitle } from '../../styles/GlobalTypography';
import { Box, ButtonPrimary} from '../../styles/GlobalComponents';
import { BoxForm, COlForm, COlMdForm, InputContact, LabelContact, StyledForm, TextareaContact} from './Styled';



const Contact = () => {


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
                            <BoxForm>
                                <StyledForm action='#'>

                                    <Row>
                                        <COlMdForm>
                                            <LabelContact>Nome</LabelContact>
                                            <InputContact  placeholder='nome'/>
                                        </COlMdForm>

                                        <COlMdForm>
                                            <LabelContact>E-mail</LabelContact>
                                            <InputContact  placeholder='fulano@gmail.com'/>
                                        </COlMdForm>

                                        <COlForm>
                                            <LabelContact>Titulo</LabelContact>
                                            <InputContact  placeholder='Titulo de assunto'/>
                                        </COlForm>

                                        <COlForm>
                                            <LabelContact>Mensagem</LabelContact>
                                            <TextareaContact cols={40} rows={10} />
                                        </COlForm>
                                    </Row>

                                    <ButtonPrimary width="100%">ENVIAR</ButtonPrimary>
                                </StyledForm>
                            </BoxForm>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </StyledSection>
  )
}

export default Contact;