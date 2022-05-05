import React from 'react';
import { Box, Flex,Link,Text } from "@chakra-ui/react";
import styled from 'styled-components';
import { Icon } from '@iconify/react';


const Wrapper = styled.section`

padding: 64px 160px 64px 64px;

position: static;
width: 496px;
height: 408px;
left: 178px;
top: 0px;

/* /Grey/50 (white) */

background: #FFFFFF;
box-shadow: 0px 20px 40px -2px rgba(174, 179, 203, 0.25);
border-radius: 4px;

/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
margin: 0px 32px;
margin: 5% 5% 5% 5%;

`;


const HeaderWrapper = styled.section`

/* Hourly */


position: static;
width: 105px;
height: 48px;
left: 0px;
top: 0px;

/* Ecosystem Knowledge/heading/2xl */

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 36px;
line-height: 48px;
/* identical to box height, or 133% */


/* /Grey/600 */

color: #3D4D51;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
margin: 24px 0px;
`;


const DescriptionWrapper = styled.section `

/* Flexible hourly consulting. Schedule a call whenever you need some quick advice. */


position: static;
width: 272px;
height: 72px;
left: 0px;
top: 72px;

/* Ecosystem Knowledge/text/xl */

font-family: Roboto;
font-style: normal;
font-weight: normal;
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
margin: 24px 0px;

`;

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
margin: 0px 4px;

`;
const ConsultingCard = () => {
  return (
        <Wrapper>
        <Flex flexDirection={'column'}> 
            
            <HeaderWrapper> <Text>Hourly</Text></HeaderWrapper> 
            <DescriptionWrapper> <Text>Flexible hourly consulting. Schedule a call whenever you need some quick advice. </Text> </DescriptionWrapper>
            <LinkWrapper><Icon icon="dashicons:arrow-right-alt2" width="15" height="15" /><Link style={{marginLeft:"4px"}}>Learn more</Link></LinkWrapper>            
            
            
        </Flex>

        </Wrapper>  

  );
};

export default ConsultingCard;
