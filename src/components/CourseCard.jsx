import React from 'react';
import { Box ,Text,Image,Badge} from '@chakra-ui/react';
import styled from 'styled-components';
import pinkRiver from '../stories/assets/PinkRiver.png'
import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';





const CardWrapper = styled.section `

align-items: center;
padding: 0px 40px 0px 0px;


width: 160%;
height: 280px;
left: 176px;
top: 192px;

background: #FFFFFF;

box-shadow: 0px 10px 20px -2px rgba(34, 44, 47, 0.08);
border-radius: 4px;

flex: none;
order: 1;
flex-grow: 0;
margin: 32px 0px;

`;



const Wrapper = styled.section `

display: block;
  margin-left: 20%;
  margin-right: 20%;
  width: 40%;
  margin-top: 5%;
  margin-bottom: 5%;

`;
const ImageWrapper = styled.section `

margin: 32px;
width: 328px;
height: 328px;
left: 0px;
top: 0px;


`;


const TextWrapper = styled.section `

display: flex;
flex-direction: column; 

margin: 38px 40px 38px 40px;

width: 1200px;
height: 252px;
left: 250px;
top: 38px;


`;

const HeaderWrapper = styled.section `

position: static;
left: 0%;
right: 0%;
top: 0%;
bottom: 40%;

/* Ecosystem Knowledge/heading/md */

font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 36px;
/* identical to box height, or 150% */


/* /Grey/700 */

color: #222C2F;

text-shadow: 0px 2px 4px rgba(37, 121, 157, 0.15);

/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;



`;





const CourseCard = ({header,description}) => {
  return(


<Wrapper>
       <Box style={{display:"flex", flexDirection:"column", textAlign:"left"}}>
           <Box style={{color:"#0E5E81",fontSize:"32px"}}>
                <h2> Courses </h2>
           </Box>


           
           <CardWrapper><Box style={{display:"flex" , flexDirection:"row"}}>

           <ImageWrapper>
                <Box>
                <Image boxSize='200px' src={pinkRiver} alt='Pink River' />
                </Box>
                </ImageWrapper>


                <TextWrapper>
                <Box>

                <HeaderWrapper><Text>{header}</Text></HeaderWrapper>
                <Box style={{ display:"flex", flexDirection:"row"}}>  
                    <Icon icon="emojione:star" width="17" height="17" />
                    <Icon icon="emojione:star" width="17" height="17" />
                    <Icon icon="emojione:star" width="17" height="17" />
                    <Icon icon="emojione:star" width="17" height="17" />
                    <Icon icon="ei:star" width="18" height="18" />
                    <Text style={{marginLeft:"10px", fontSize:"12px"}}> 4.5 (18 reviews)</Text>
                    </Box>

                <Text style={{ marginTop:"20px", marginBottom:"20px" }}> {description}</Text>
                
                
                <Badge  style={{borderRadius:"10px",fontSize:"11px", background:"#E0F6FF"}} variant='subtle'     >
                Ecosystem Developers
                </Badge>

                <Badge  style={{borderRadius:"10px", marginLeft:"13px", fontSize:"11px", background:"#E0F6FF"}} variant='subtle'   >
                Buisiness Creators
                </Badge>



                </Box></TextWrapper>



           </Box></CardWrapper>
       </Box>

       </Wrapper>
  )
};

export default CourseCard;


CourseCard.propTypes = {
  
  header: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  
};
