import React from 'react';
import {FooterForStorybook as Footer} from './FooterForStorbook';




export default {
    title: "Components",
    component: "Footer",
    subcomponents: { Footer },
   };


   const Template = (args) => (
    <Footer {...args}></Footer>
      
  ); 


  export const footerProperties = Template.bind({});
  footerProperties.args = {
    color: "#004766",
    buttonText:"Sign me up!",
    buttonText:"Sign me up!",
    buttonColor: "#0E5E81",
    buttonWidth: "135px",
    buttonHeight: "40px",
    



  };
 