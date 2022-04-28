import React from 'react'
import { Box, Flex  } from '@chakra-ui/react'
import CTAexploreCard from './CTAexploreCard'
import styled from 'styled-components';


const CTAexploreCardWrapper = styled.section `

display: flex ;
flex-direction: column;
align-items: flex-start;

padding: 7.5%;

position: static;
width: 100%;
height: 792px;
left: 0px;
top: 661px;




background: #F7FBFD;



`;

const HeaderWrapper = styled.section `


width: 300px;
height: 20px;
left: 0px;
top: 0px;


/* Ecosystem Knowledge/text/sm */

font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 20px;
/* identical to box height, or 167% */

letter-spacing: 0.08em;
text-transform: uppercase;


color: #25799D;




flex: none;
order: 0;
flex-grow: 0;
margin: 24px 0px;


`;

const BodyWrapper = styled.section `
width: 33%;
height: 108px;



font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 32px;
line-height: 36px;


color: #5A6D72;



margin: 24px 0px;

`;


const CTAexploreSite = () => {
  return (
   <React.Fragment> 
      
      <CTAexploreCardWrapper> 
            <HeaderWrapper> <Box>Learn, grow, share, connect </Box> </HeaderWrapper>
            
            <BodyWrapper><Box> A trove of resources are at your disposal. Dive in and choose the tools that work for you</Box>  </BodyWrapper>
            <Flex flexDirection={'row'}> 
            <CTAexploreCard
            icon={"fa:comments-o"}
            iconColor={"#4ca6cd"}
            header={"Do your research"}
            body={"Put what you’ve learned into action now. Go to knowledge center to get started building your ecosystem today.  Use our suggestions or create your own personalized list. "}> 
            </CTAexploreCard>

            <CTAexploreCard
            icon={"fa6-solid:book-open-reader"}
            iconColor={"#ffff"}
            header={"Get Certified"}
            body={"Put what you’ve learned into action now. Go to knowledge center to get started building your ecosystem today.  Use our suggestions or create your own personalized list. "}> 
            </CTAexploreCard>

            <CTAexploreCard
            icon={"wpf:diploma-1"}
            iconColor={"#4CA6CD"}
            header={"Join our Forum"}
            body={"Put what you’ve learned into action now. Go to knowledge center to get started building your ecosystem today.  Use our suggestions or create your own personalized list. "}> 
            </CTAexploreCard>
            
            </Flex>
        
            </CTAexploreCardWrapper>
   
   
   
   
   
   </React.Fragment>
  )
}

export default CTAexploreSite