import React from 'react';
import ReviewCard from '../components/ReviewCard';
import ReviewCardSlider from '../components/ReviewCardSlider';

//import { storiesOf } from '@storybook/react';
//import ApolloWraper from '../src/components/ReviewCard/ApolloProvider';
//import { addDecorator } from "@storybook/react";

export default {
     title: "Components",
     component: ReviewCard,
     subcomponents: { ReviewCard },
    };
const Template = (args) => (
    <ReviewCardSlider {...args}>
      
    </ReviewCardSlider>
);
  export const reviewCard = Template.bind({});
  reviewCard.args = {
    description: 'This course provides a great overview of Blender, an extermely powerful (and also incredibly complicated) 3D modeling and animation program. Mikey, the main instructor, is amusing and informative. Both he and Ben student work',
    lname: 'Maurica',
    fname: 'Alejandro',
    title: 'Ecosystem Builder, Barcelona',
    intervalMS: 6100,
    showArrows:true,
  };
 

