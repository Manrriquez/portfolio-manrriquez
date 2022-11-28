import React from 'react'
import { BoxIcon, FloatingButton, WhatsappIcon } from './Styled';



const ButtonWhatsApp = () => {


  return (
    <FloatingButton>
          <BoxIcon href="https://api.whatsapp.com/send?phone=5511982395840&text=Ol%C3%A1%20Luis%2C%20Tudo%20bem%3F%20Peguei%20seu%20numero%20atrav%C3%A9s%20do%20seu%20portfolio%2C%20podemos%20conversar%3F">
           <WhatsappIcon>
              <i className='fa fa-whatsapp'></i>
            </WhatsappIcon>
          </BoxIcon>    
    </FloatingButton>
  )
}

export default ButtonWhatsApp;