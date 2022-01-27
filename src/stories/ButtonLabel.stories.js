import React from 'react';
import ButtonLabel from '../components/ButtonLabel';




export default {
    title: "Components",
    component: "ButtonLabel",
    subcomponents: { ButtonLabel },
   };


   const Template = (args) => (
    <ButtonLabel {...args}></ButtonLabel>
      
  ); 


  export const buttonLabelProperties = Template.bind({});
  buttonLabelProperties.args = {
    buttonText:"Sign me up!",
    buttonColor: "#0E5E81",
    buttonWidth: "135px",
    buttonHeight: "40px",


  };
 