import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components'
import ButtonLabel from './ButtonLabel';
import { Icon } from '@iconify/react';



const MappingWrapper = styled.section `

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #FFFFFF;
    padding: 120px;


`;


const Box1Wrapper = styled.section `
display:flex;
align-items:center;
justify-content:center; 
    width: 545px;
    height: 421px;
    background: #E0F6FF;
    border: 1px solid #F7FBFD;
    box-sizing: border-box;
    border-radius: 4px;
    box-shadow: 20px 20px 50px 20px rgba(34, 44, 47, 0.08);
`;

const Box1ContentFrame = styled.section`

display:flex;
flex-direction:row;

width: 512px;
height: 384px;
left: 17px;
top: 16px;
border: 1px solid #F7FBFD;

box-sizing: border-box;
border-radius: 4px;
box-shadow: inset -2px -2px 4px rgba(174, 179, 203, 0.25), inset 2px 2px 4px rgba(174, 179, 203, 0.25);

/* /Grey/50 (white) */

background: #FFFFFF;
/* /Grey/100 */



`;


const Box2Wrapper = styled.section `
    width: 545px;
    height: 360px;
    background: #FFFFFF;
 
`;

const CirclePassWrapper = styled.section `
    font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 20px;
letter-spacing: 0.08em;
text-transform: uppercase;
color: #5A6D72;
margin-bottom:32px;
`;

const HeaderWrapper = styled.section `
    font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 36px;
line-height: 48px;
color: #004766;
margin-bottom:32px;

`;

const ContentWrapper = styled.section `
  font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 28px;



color: #3D4D51;
margin-bottom:32px;



`;

const DivVerticle = styled.section `
position:static;
width: 1px;
height: 383px;
left: 143px;
top: 17px;

/* /Grey/300 */

border: 1px dashed #D4DFE3;
box-sizing: border-box;
margin-left:126px;
`;
const DivHorizontal = styled.section `

width: 512px;
height: 1px;
left: 16px;
top: 208px;

/* /Grey/300 */

border: 1px dashed #D4DFE3;
box-sizing: border-box;

margin-top:192px;
margin-left:-386px;
`;

const TextWrapper = styled.section`


position:absolute;
width: 230%;
height: 16px;

font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 12px;
line-height: 16px;
/* identical to box height, or 133% */

letter-spacing: 0.01em;

/* /Grey/300 */

color: #D4DFE3;

`;

const Box1HeaderWrapper = styled.section`


position:absolute;
width: 7.1%;

background:#FFFFFF;

font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 16px;
/* identical to box height, or 133% */

letter-spacing: 0.01em;

/* /Grey/300 */

color: #4CA6CD;

`;

const MappingComponent = () => {
  return (
      <React.Fragment> 
      <MappingWrapper> 
     
        <Box1Wrapper> 
        <Box1ContentFrame> 
       

                
               <DivVerticle></DivVerticle>
               <DivVerticle></DivVerticle>
               <DivVerticle></DivVerticle>
               <DivHorizontal></DivHorizontal>
               <Box marginTop={"16px"} marginLeft={"-299"}>  <Box1HeaderWrapper>  <Text style={{paddingLeft:"221px", marginLeft:"-220px"}}>Ecosystem Map </Text></Box1HeaderWrapper> </Box>
              <TextWrapper>  <Text style={{marginTop:"201px", marginLeft:"42px"}}> Stage 1 </Text></TextWrapper>
              <TextWrapper><Text style={{marginTop:"201px", marginLeft:"175px"}}> Stage 2</Text></TextWrapper>
              <TextWrapper><Text style={{marginTop:"201px", marginLeft:"300px"}}> Stage 3 </Text></TextWrapper>
              <TextWrapper><Text style={{marginTop:"201px",marginLeft:"430px"}}> Stage 4 </Text></TextWrapper>
              <Box position={"absolute"} marginLeft="63px" marginTop={"41px"}>  <ButtonLabel textFontSize={"small"} buttonText={"Task task 1"} buttonColor={"#004766"} buttonHeight={"5px"} buttonWidth={"190px"}></ButtonLabel></Box>
              <Box position={"absolute"} marginLeft="320px" marginTop={"41px"}>  <ButtonLabel textFontSize={"small"} buttonText={"Task task 2"} buttonColor={"#25799D"} buttonHeight={"20px"} buttonWidth={"167px"}></ButtonLabel></Box>
              <Box position={"absolute"} marginLeft="192px" marginTop={"89px"}>  <ButtonLabel textFontSize={"small"} buttonText={"Task task 1"} buttonColor={"#4CA6CD"} buttonHeight={"20px"} buttonWidth={"190px"}></ButtonLabel></Box>
              <Box position={"absolute"} marginLeft="23px" marginTop={"137px"}>  <ButtonLabel textFontSize={"small"} buttonText={"Task task 2"} buttonColor={"#004766"} buttonHeight={"20px"} buttonWidth={"296px"}></ButtonLabel></Box>
              <Box position={"absolute"} marginLeft="23px" marginTop={"215px"}>  <ButtonLabel textFontSize={"small"} buttonText={"Task task 1"} buttonColor={"#004766"} buttonHeight={"20px"} buttonWidth={"156px"}></ButtonLabel></Box>
              <Box position={"absolute"} marginLeft="246px" marginTop={"215px"}>  <ButtonLabel textFontSize={"small"} buttonText={"Task task 1"} buttonColor={"#0E5E81"} buttonHeight={"20px"} buttonWidth={"194px"}></ButtonLabel></Box>
              <Box position={"absolute"} marginLeft="155px" marginTop={"263px"}>  <ButtonLabel textFontSize={"small"} buttonText={"Task task 2"} buttonColor={"#4CA6CD"} buttonHeight={"20px"} buttonWidth={"332px"}></ButtonLabel></Box>
              <Box position={"absolute"} marginLeft="23px" marginTop={"311px"}>  <ButtonLabel textFontSize={"small"} buttonText={"Task task 2"} buttonColor={"#25799D"} buttonHeight={"20px"} buttonWidth={"195px"}></ButtonLabel></Box>
              
              
         
              
              
              </Box1ContentFrame>
       
        </Box1Wrapper>
        <Box2Wrapper> 
        <Box> 
            <CirclePassWrapper> <Text> Circle pass</Text> </CirclePassWrapper>
            
            <HeaderWrapper><Text> Map your ecosoystem</Text> </HeaderWrapper>
            <ContentWrapper> 
            <Text display={"flex"} flexDirection={"row"} style={{marginBottom:"32px"}} ><Icon style={{marginTop:"4px", marginRight:"16px"}}  icon="teenyicons:tick-circle-outline"  color="#25799D"/> Hourly or daily consulting</Text>
            <Text display={"flex"} flexDirection={"row"} style={{marginBottom:"32px"}}><Icon style={{marginTop:"4px", marginRight:"16px"}} icon="teenyicons:tick-circle-outline" color="#25799D"/> Leadership consulting</Text>
            <Text display={"flex"} flexDirection={"row"} style={{marginBottom:"32px"}}> <Icon style={{marginTop:"4px", marginRight:"16px"}} icon="teenyicons:tick-circle-outline" color="#25799D"/>Team trainings for company</Text>
            </ContentWrapper>
            <ButtonLabel buttonText={"Start mapping"} buttonColor={"#0E5E81"} buttonHeight={"40px"} buttonWidth={"150px"}></ButtonLabel>

        </Box> 
 
        </Box2Wrapper>
      
      </MappingWrapper>
      </React.Fragment>
  )
}

export default MappingComponent