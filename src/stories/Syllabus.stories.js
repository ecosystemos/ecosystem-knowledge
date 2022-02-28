import React from 'react';
import SyllabusLessons from '../components/SyllabusLessons';




export default {
    title: "Components",
    component: "SyllabusLessons",
    subcomponents: { SyllabusLessons },
   };


   const Template = (args) => (
    <SyllabusLessons {...args}></SyllabusLessons>
      
  ); 


  export const syllabusLessons = Template.bind({});
  syllabusLessons.args = {

    header: "Syllabus",
    learningObjectives: "Building your Startup Ecosystem",
    description: "Put what you learned into practice! Create and manage your tasks",
    headerColor: "#82C6E3",

  };
  