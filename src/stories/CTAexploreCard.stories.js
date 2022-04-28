import React from 'react';
import CTAexploreCard from '../components/CTAexploreCard';



export default {
    title: "Components",
    component: "CTAexploreCard",
    subcomponents: { CTAexploreCard },
   };


   const Template = (args) => (
    <CTAexploreCard {...args}></CTAexploreCard>
      
  ); 


  export const ctaExploreCard = Template.bind({});
  ctaExploreCard.args = {
    icon:"fa:comments-o",
    header: "Do your research",
    body: "Put what you’ve learned into action now. Go to knowledge center to get started building your ecosystem today.  Use our suggestions or create your own personalized list. ",
    iconColor:"#ffff"


  };
 