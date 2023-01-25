import React from 'react'
import BackgroundFooter from '../../assets/img/background-footer.png'
import { Col, Container, Row } from '../../assets/styles/GlobalGrid';
import { FlexItems, IconSocial, LinkSocial, StyledFooter, TypographyFooter } from './Styled';
import IconInstagram from '../../assets/img/insta.svg';
import IconFacebook from '../../assets/img/face.svg';
import IconGithub from '../../assets/img/github.svg';



const Footer = () => {
  return (
    <StyledFooter url={BackgroundFooter}>
      <Container>
        <Row>
          <Col>
              <div>
                <FlexItems>
                  <LinkSocial>
                    <IconSocial src={IconInstagram} />
                  </LinkSocial>

                  <LinkSocial>
                    <IconSocial src={IconFacebook} />
                  </LinkSocial>

                  <LinkSocial href="https://github.com/Manrriquez" target="_blank">
                    <IconSocial src={IconGithub} />
                  </LinkSocial>
    
                </FlexItems>
                <TypographyFooter> Copyright © 2022 Luis Fernando • Desenvolvedor Full Stack </TypographyFooter>
              </div>
          </Col>
        </Row>
      </Container>
    </StyledFooter>
  )
}

export default Footer;