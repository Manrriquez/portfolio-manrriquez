import React from 'react'
import BackgroundFooter from '../../assets/img/background-footer.png'
import { Col, Container, Row } from '../../assets/styles/GlobalGrid';
import { FlexItems, IconSocial, LinkSocial, ListISocialFooter, ListItemSocialFooter, ListLinkMenuFooter,
   ListLinkSocialFooter, StyledFooter, TypographyFooter, Waves } from './Styled';
import WavesImage from '../../assets/img/WAVES.png'


const Footer = () => {
  return (
    <StyledFooter>
      <div class="waves">
        <div class="wave" id="wave1"></div>
        <div class="wave" id="wave2"></div>
        <div class="wave" id="wave3"></div>
        <div class="wave" id="wave4"></div>
      </div>
      <ul class="social-icon">
        <li class="social-icon__item"><a class="social-icon__link" target="_blank" href="https://github.com/Manrriquez">
            <ion-icon name="logo-github"></ion-icon>
          </a></li>
        <li class="social-icon__item"><a class="social-icon__link" target="_blank" href="https://wa.me/5511987529220?text=Ol%C3%A1%20Luis%20Fernando%2C%20Tudo%20bem%3F.%20Peguei%20seu%20numero%20atrav%C3%A9s%20do%20seu%20portfolio%2C%20podemos%20conversar%3F">
            <ion-icon name="logo-whatsapp"></ion-icon>
          </a></li>
        <li class="social-icon__item"><a class="social-icon__link" target="_blank" href="https://www.linkedin.com/in/manrriiquez/">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a></li>
        <li class="social-icon__item"><a class="social-icon__link" target="_blank" href="https://www.instagram.com/lxfdky/">
            <ion-icon name="logo-instagram"></ion-icon>
          </a></li>
      </ul>
      <ul class="menu">
        <li class="menu__item"><a class="menu__link" href="#top">Home</a></li>
        <li class="menu__item"><a class="menu__link" href="#about">Sobre mim</a></li>
        <li class="menu__item"><a class="menu__link" href="#timeline">Timeline</a></li>
        <li class="menu__item"><a class="menu__link" href="#projects">Projetos</a></li>
        <li class="menu__item"><a class="menu__link" href="#skills">Skills</a></li>

      </ul>
      <p>© 2023 Manrriquez |  Desenvolvedor Full Stack</p>
    </StyledFooter>
  )
}

export default Footer;