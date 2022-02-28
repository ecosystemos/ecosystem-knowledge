import React from 'react';
import  Footer from '../components/Footer';




export default {
    title: "Components",
    component: "Footer",
    subcomponents: { Footer },
   };


   const Template = (args) => (
    <Footer {...args}></Footer>
      
  ); 


  export const footer = Template.bind({});
  footer.args = {
    color: "#004766",
    buttonText:"Sign me up!",
    buttonText:"Sign me up!",
    buttonColor: "#0E5E81",
    buttonWidth: "135px",
    buttonHeight: "40px",
    



  };
 