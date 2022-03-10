import { Flex,Text,Image,Box } from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components'



const Wrapper = styled.section`
margin-top: 0;
margin-left: 100px;

width: 70%;
height: 192px;

/* /Grey/50 (white) */

background: #FFFFFF;
/* Card 2 */

box-shadow: 0px 20px 40px -2px rgba(34, 44, 47, 0.15);
border-radius: 4px;

`;


const LogoWrapper = styled.section `
margin: 10% 40% 10% 40%;

`;






const Circle = styled.circle`



margin: 20px auto 20px auto;
   width: 100px;
    height: 100px;
  border: 8px solid #25799D;
  border-radius: 50%;
  border-end-start-radius: 50%;
  /* Halve the circle */
  border-bottom-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;



  
  /* Rotate the circle */
  transform: rotate(45deg);
  position:center;  
    
`;


const TextWrapper = styled.section`


color: #0E5E81;

font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 16px;
/* identical to box height, or 133% */

text-align: center;

`;


const Progress = () => {
  return (


        <Wrapper> 

    

         <Flex Flex flexDirection={'column'} >

       
        <Circle></Circle>
       
       <TextWrapper><Text > Making progress!</Text>
       <Text> 4 of 12 modules completed</Text></TextWrapper>
       
       
       
       
        </Flex>
        </Wrapper>

  )
}

export default Progress