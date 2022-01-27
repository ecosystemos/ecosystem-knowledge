
import React from 'react';
import CourseCard from '../components/CourseCard';
import CourseCardSlider from '../components/CourseCardSlider';

//import { storiesOf } from '@storybook/react';
//import ApolloWraper from '../src/components/ReviewCard/ApolloProvider';
//import { addDecorator } from "@storybook/react";

export default {
     title: "Components",
     component: CourseCard,
     subcomponents: { CourseCard },
    };
const Template = (args) => (
    <CourseCardSlider {...args}>
      
    </CourseCardSlider>
);
  export const courseCard = Template.bind({});
  courseCard.args = {


        header:"Understanding your Ecosystem",
        description:"Build holistic understanding from the journey of startups’ development along with the service ecosystems that support this journey by connecting experience based and globally recognized methods, tools and knowledge from the different stages in a systematic manner.  ",
        showArrows:true,
  };
 



























