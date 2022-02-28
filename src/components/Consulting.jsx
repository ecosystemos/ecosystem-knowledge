import React from 'react';
import {Flex,Box,Text,Link,GridItem,Grid} from '@chakra-ui/react';
import ConsultingCard from './ConsultingCard';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const ConsultingWrapper = styled.section `


margin : 1.50% auto 0px auto;

`;


const HeaderWrapper = styled.section `




width: 701px;
height: 56px;



font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 48px;
line-height: 56px;

text-align: center;
letter-spacing: -0.01em;


color: #3D4D51;




`;


const DescriptionWrapper = styled.section `



margin-top: 24px;
margin-left: 2%

width: 649px;
height: 30px;




font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 30px;

text-align: center;


color: #5A6D72;






`;


const LinkWrapper = styled.section `




margin-top: 96px;
width: 49px;
height: 24px;


font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;  


letter-spacing: 0.02em;


color: #3D4D51;



`;

const Consulting = ({header, description}) => {  
  return (

    

    <Flex flexDirection={'column'}>

<ConsultingWrapper>
        <HeaderWrapper><Text>{header}</Text></HeaderWrapper>
        <DescriptionWrapper><Text>{description}</Text></DescriptionWrapper>
        
        <LinkWrapper> <Flex flexDirection={'row'} style={{marginLeft:"0%"}}> 
        <Grid templateColumns='repeat(6, 1fr)' gap={75}>

        <GridItem w='250%' h='10'  >
 <Link> Hourly</Link></GridItem>
 <GridItem w='250%' h='10'  >
  <Link > Daily</Link></GridItem>
  <GridItem w='250%' h='10'  >
   <Link > Team</Link></GridItem>
   <GridItem w='225%' h='10'  >
    <Link > Company</Link></GridItem>
    <GridItem w='225%' h='10'  >
    <Link > 3-day workshop</Link></GridItem>
    <GridItem w='225%' h='10' >
     <Link > Week-long workshop</Link></GridItem>
             </Grid>
        

        
        
        </Flex></LinkWrapper>
        </ConsultingWrapper>



        <Flex flexDirection={'row'}> 
            <ConsultingCard> </ConsultingCard>  
            <ConsultingCard> </ConsultingCard>
            <ConsultingCard> </ConsultingCard>  

        </Flex>







    </Flex>






  );
};

export default Consulting;

Consulting.propTypes = {
  header: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
 
  
  
};