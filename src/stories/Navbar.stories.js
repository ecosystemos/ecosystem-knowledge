import React from 'react';
import Navbar from '../components/Navbar';


export default {
     title: "Components",
     component: "Navbar",
     subcomponents: { Navbar },
    };


  

const Template = (args) => (
  <Navbar {...args}></Navbar>
    
);
  export const navbar = Template.bind({});
  navbar.args = {
    navbarColor: "#0E5E81",
    firstTab: "Syllabus",
    secondTab : "Q & A",
    thirdTab : "Notes",
    fourthTab :"Take Action" ,

  };
 