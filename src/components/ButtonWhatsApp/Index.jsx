import React from 'react'
import { BoxIcon, FloatingButton, WhatsappIcon } from './Styled';



const ButtonWhatsApp = () => {


  return (
    <FloatingButton>
          <BoxIcon href="#">
           <WhatsappIcon>
              <i className='fa fa-whatsapp'></i>
            </WhatsappIcon>
          </BoxIcon>    
    </FloatingButton>
  )
}

export default ButtonWhatsApp;