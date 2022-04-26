import { Box ,Flex,Link} from '@chakra-ui/react'
import React from 'react'
import styled from "styled-components"
import { Icon } from '@iconify/react';



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

const CTAexploreCard = () => {
  return (
      <React.Fragment> 
      <Flex flexDirection={'row'}> 
        <Box> 
            <Box></Box>
            <HeaderWrapper> <Box>Do your research</Box>  </HeaderWrapper>
            <BodyWrapper> <Box>Put what you’ve learned into action now. Go to knowledge center to get started building your ecosystem today.  Use our suggestions or create your own personalized list. </Box> </BodyWrapper>
            <LinkWrapper><Icon icon="dashicons:arrow-right-alt2" width="15" height="15" /><Link style={{marginLeft:"4px"}}>Learn more</Link></LinkWrapper>            
        </Box>   
        <Box> 
            <Box></Box>
            <HeaderWrapper> <Box>Do your research</Box>  </HeaderWrapper>
            <BodyWrapper> <Box>Put what you’ve learned into action now. Go to knowledge center to get started building your ecosystem today.  Use our suggestions or create your own personalized list. </Box> </BodyWrapper>
            <LinkWrapper><Icon icon="dashicons:arrow-right-alt2" width="15" height="15" /><Link style={{marginLeft:"4px"}}>Learn more</Link></LinkWrapper>            
        </Box>   
        <Box> 
            <Box></Box>
            <HeaderWrapper> <Box>Do your research</Box>  </HeaderWrapper>
            <BodyWrapper> <Box>Put what you’ve learned into action now. Go to knowledge center to get started building your ecosystem today.  Use our suggestions or create your own personalized list. </Box> </BodyWrapper>
            <LinkWrapper><Icon icon="dashicons:arrow-right-alt2" width="15" height="15" /><Link style={{marginLeft:"4px"}}>Learn more</Link></LinkWrapper>            
        </Box>   
    </Flex>
            
        </React.Fragment>
  )
}

export default CTAexploreCard