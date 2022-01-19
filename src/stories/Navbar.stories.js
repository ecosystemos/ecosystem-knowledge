import React from 'react';
import {NavbarForStorybook as Navbar} from './NavbarForStorybook';


export default {
     title: "Components",
     component: "Navbar",
     subcomponents: { Navbar },
    };


  

const Template = (args) => (
  <Navbar {...args}></Navbar>
    
);
  export const navbarProperties = Template.bind({});
  navbarProperties.args = {
    navbarColor: "red",
    firstTab: "Syllabus",
    secondTab : "Q & A",
    thirdTab : "Notes",
    fourthTab :"Take Action" ,

  };
 