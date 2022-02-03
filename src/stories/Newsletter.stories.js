
import React from 'react';
import Newsletter from '../components/Newsletter';




export default {
     title: "Components",
     component: Newsletter,
     subcomponents: { Newsletter },
    };
const Template = (args) => (
    <Newsletter {...args}>
      
    </Newsletter>
);
  export const newsletter = Template.bind({});
  newsletter.args = {


        header:"Sign up for Startup Commons newsletter",
        text:"We’ll keep you up to date on all things Startup Ecosystems!",
        buttonText:"Sign me up",
        buttonAndFormColor:"#004766;",
        placeholderText:'Enter Your Email', 
      
  };
 



























