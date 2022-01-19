import React from 'react';
import {ReviewCardForStorybook} from './ReviewCardForStorybook';
import {SliderForStorybook} from './SliderForStorybook';
//import { storiesOf } from '@storybook/react';
//import ApolloWraper from '../src/components/ReviewCardForStorybook/ApolloProvider';
//import { addDecorator } from "@storybook/react";

export default {
     title: "Components/Review Card Slider",
     component: SliderForStorybook,
     subcomponents: { ReviewCardForStorybook },
    };
const Template = (args) => (
    <SliderForStorybook {...args}>
      
    </SliderForStorybook>
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
 

