import { Box ,Flex,Link} from '@chakra-ui/react'
import React from 'react'
import styled from "styled-components"
import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';






const LinkWrapper = styled.section`

position: static;
width: 100px;
height: 16px;
left: 20px;
top: 12px;

/* Ecosystem Knowledge/text/md */

font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 16px;
/* identical to box height, or 114% */

display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.02em;

/* Primary/600 */

color: #0E5E81;


/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;
margin: 20px 4px;

`;


const HeaderWrapper = styled.section`
position: static;
width: 280px;
height: 28px;
left: 0px;
top: 0px;

/* Ecosystem Knowledge/heading/sm */

font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 28px;
/* identical to box height, or 140% */


/* Primary/600 */

color: #0E5E81;


/* Inside auto layout */

flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
margin: 8px 0px;`;

const BodyWrapper = styled.section `
position: static;
width: 280px;
height: 120px;
left: 0px;
top: 36px;

/* Ecosystem Knowledge/heading/xs */

font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
/* or 150% */

letter-spacing: 0.02em;

/* /Grey/500 */

color: #5A6D72;


/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;
margin: 8px 0px;
`;

const Circle = styled.section `

height:100px;
width:100px;
background: #004766;
border-radius:50%;
padding: 9% 9%;
margin: 60px 0px 32px 0px;

`;
const CTAexploreCard = ({icon,iconColor,header,body,...args}) => {
  return (
      <React.Fragment> 
      
        <Box  marginRight={"182px"}> 
            <Circle> <Box><Icon icon={icon} color={iconColor} width="50" height="50" /></Box> </Circle>
            <HeaderWrapper> <Box>{header}</Box>  </HeaderWrapper>
            <BodyWrapper> <Box>{body}</Box> </BodyWrapper>
            <LinkWrapper><Icon icon="dashicons:arrow-right-alt2" width="15" height="15" /><Link style={{marginLeft:"4px"}}>Learn more</Link></LinkWrapper>            
        </Box>   
  

            
        </React.Fragment>
  )
}

export default CTAexploreCard

CTAexploreCard.propTypes = {
    buttonColor: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    buttonWidth: PropTypes.string.isRequired,
    buttonWheight: PropTypes.string.isRequired,
    textFontSize: PropTypes.string.isRequired,
    

    
};