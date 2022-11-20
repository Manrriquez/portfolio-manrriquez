import React, { useEffect, useRef, useState } from 'react'
import { Col, Container, Row, StyledSection } from '../../styles/GlobalGrid';
import { TypographyDescription, TypographyTitle } from '../../styles/GlobalTypography';
import { Box, ButtonPrimary} from '../../styles/GlobalComponents';
import { BoxFLex, BoxForm, COlForm, COlMdForm, InputContact, LabelContact, StyledForm, TextareaContact} from './Styled';

import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';



const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm(
            "service_6zkf28d",
            "template_bdxgdqj",
            form.current,
            "j8bW15sy9vE5yMDmW"
          )
          .then(
            (result) => {
                toast.success("E-mail enviado com sucesso!");
                 console.log(result.text);
            },
            (error) => {
              console.log(error.text);
              toast.error("Email invalido, tente novamente!");
            }
          );
      };

      
    


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
                                <StyledForm ref={form} onSubmit={sendEmail}>

                                    <Row>
                                        <BoxFLex>
                                            <COlMdForm>
                                                <LabelContact>Nome</LabelContact>
                                                <InputContact  placeholder='Fulano Silva' name="name" id="name" />
                                            </COlMdForm>

                                            <COlMdForm>
                                                <LabelContact>E-mail</LabelContact>
                                                <InputContact  placeholder='fulano@gmail.com' type="email" id="email" name="email"/>
                                            </COlMdForm>
                                        </BoxFLex>

                                        <COlForm>
                                            <LabelContact>Titulo</LabelContact>
                                            <InputContact placeholder='Titulo de assunto' name="subject" id="subject" type="text"/>
                                        </COlForm>

                                        <COlForm>
                                            <LabelContact>Mensagem</LabelContact>
                                            <TextareaContact name="message" id="message" cols={40} rows={10} />
                                        </COlForm>
                                    </Row>

                                    <ButtonPrimary width="100%" type="submit" value="Send">ENVIAR</ButtonPrimary>
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