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


  export const buttonLabel = Template.bind({});
  buttonLabel.args = {
    buttonText:"Sign me up!",
    buttonColor: "#0E5E81",
    buttonWidth: "135px",
    buttonHeight: "20%",
    textFontSize: "medium"


  };
 