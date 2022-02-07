import React from 'react';
import SyllabusLessons from './SyllabusLessons';
import CourseCardSlider from './CourseCardSlider';
import Newsletter from './Newsletter';
import Consulting from './Consulting';



const SyllabusPage = () => {
  return (

        <React.Fragment>
       
        <SyllabusLessons 
        header= {"Syllabus"}
        learningObjectives= {"Building your Startup Ecosystem"}
        description= {"Put what you learned into practice! Create and manage your tasks"}
        headerColor={"#82C6E3"}/>


        <CourseCardSlider
        
        header={"Understanding your Ecosystem"}
        description={"Build holistic understanding from the journey of startups’ development along with the service ecosystems that support this journey by connecting experience based and globally recognized methods, tools and knowledge from the different stages in a systematic manner.  "}
        showArrows={true}
 
        ></CourseCardSlider>

        <Consulting></Consulting>


        <Newsletter 

          header={"Sign up for Startup Commons newsletter"}
          text="We’ll keep you up to date on all things Startup Ecosystems!"
          buttonText={"Sign me up"}
          buttonAndFormColor={"#004766;"}
          placeholderText={'Enter Your Email'}
        
        ></Newsletter>

        </React.Fragment>
  )
};

export default SyllabusPage;

