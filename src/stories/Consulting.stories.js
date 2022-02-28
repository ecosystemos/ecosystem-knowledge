import React from 'react';
import Consulting from '../components/Consulting';




export default {
    title: "Components",
    component: "Consulting",
    subcomponents: { Consulting },
   };


   const Template = (args) => (
    <Consulting {...args}></Consulting>
      
  ); 


  export const consulting = Template.bind({});
  consulting.args = {
    header:"Consulting that meets your needs",
    description: "Not sure which consulting package is right for you? We’ll help you choose",
 

  };
 