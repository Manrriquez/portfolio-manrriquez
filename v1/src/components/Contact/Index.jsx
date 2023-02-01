import React, { useState} from 'react'
import { Col, Container, Row, StyledSection } from '../../assets/styles/GlobalGrid';
import { TypographyDescription, TypographyTitle } from '../../assets/styles/GlobalTypography';
import { Box, ButtonPrimary} from '../../assets/styles/GlobalComponents';
import { BoxFLex, BoxForm, ButtonDisabled, COlForm, COlMdForm, InputContact, LabelContact, StyledForm, TextareaContact} from './Styled';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import { BASE_SEND_KEY, BASE_SEND_SERVICE, BASE_SEND_TEMPLATE } from '../config/sendEmail';

const EMAIL_REGEX = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,6}))$/
  );

const Contact = () => {

    const initialState = {
        "name": "",
        "email": "",
        "subject": "",
        "message": ""
      }
      const [dados, setDados] = useState(initialState);
      const [emailSuccess, setEmailsuccess] = useState(false);

      const sendEmail = (e) => {

        e.preventDefault();
        if(dados.nome === "" || dados.email === "" || dados.message === "") {
            toast.warning("Preencha os todos os campos corretamente!");
        } else {
          if(EMAIL_REGEX.test(dados.email)) {
            emailjs.send(BASE_SEND_SERVICE, BASE_SEND_TEMPLATE, dados ,BASE_SEND_KEY)
            .then((result) => {
              setEmailsuccess(!emailSuccess);
              setDados(initialState);
             toast.success("E-mail enviado com sucesso!");
            })
            .catch(err => toast.error("Erro ao enviar e-mail, por favor contacte comigo através do whatssap no canto superior da tela!"));
          } else {
            toast.error("Email invalido, tente novamente!");          
        }
        }
    }

  return (
    <StyledSection id="contact">
        <Container>
            <Row>
                <Col size='10rem'>
                    <Box>
                        <TypographyTitle>CONTATO</TypographyTitle>
                        <TypographyDescription>
                            Essa seção se refere ao seu contato comigo, preencha os campos corretamente para melhor entendimentom, e dentro de 24hrs você tera um retorno.
                        </TypographyDescription>
                    </Box>
                    <Row>
                        <Col>
                            <BoxForm>
                                <StyledForm onSubmit={sendEmail}>

                                    <Row>
                                        <BoxFLex>
                                            <COlMdForm>
                                                <LabelContact>Nome</LabelContact>
                                                <InputContact value={dados.name} onChange={e => setDados({...dados, name: e.target.value})}
                                                 placeholder='Nome' name="name" id="name" minLength="10" required/>
                                            </COlMdForm>

                                            <COlMdForm>
                                                <LabelContact>E-mail</LabelContact>
                                                <InputContact value={dados.email} onChange={e => setDados({...dados, email: e.target.value})}
                                                placeholder='examplo@gmail.com' type="email" minLength="6" id="email" name="email" required/>
                                               
                                            </COlMdForm>
                                        </BoxFLex>

                                        <COlForm>
                                            <LabelContact>Titulo</LabelContact>
                                            <InputContact value={dados.subject} onChange={e => setDados({...dados, subject: e.target.value})}
                                             placeholder='Titulo de assunto' name="subject" minLength="6" id="subject" type="text" required/>
                                             
                                        </COlForm>

                                        <COlForm>
                                            <LabelContact>Mensagem</LabelContact>
                                            <TextareaContact value={dados.message} onChange={e => setDados({...dados, message: e.target.value})} 
                                             name="message" id="message" minLength="10" cols={40} rows={10} required/>
                                        </COlForm>
                                    </Row>

                                    {emailSuccess ? <ButtonDisabled width="100%">E-MAIL ENVIADO!</ButtonDisabled> : <ButtonPrimary width="100%" type="submit" value="Send">ENVIAR</ButtonPrimary>}
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