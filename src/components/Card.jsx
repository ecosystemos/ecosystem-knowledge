import React from "react";
import {
  Text,
  Link,
  Button,
  Grid,
  GridItem,
  Box,
  Container
} from "@chakra-ui/react";
import StarRating from '../components/StarRating';
import { Icon } from '@iconify/react';
import styled from 'styled-components';

const LastButton = styled.section`

    display: inline-block;

    @media (max-width: 1050px) {
        margin-bottom: 50px;
    }
`;

const GotoButton = styled.section`
    right: 20px;  
    bottom: 30px;
    width: 131px; 
    height: 38px;  
    position: absolute;

    /* @media (max-width: 1050px) {
      left: 50%;
      right: 50%;
      transform: translate(-50% -50%);
    } */
`;

function Card(props) {
  const { product,  longLine } = props;

  return (
      <Container maxW="1440px"
      display='flex'
      boxSizing="border-box"
      justifyContent={'center'} >
        <Grid 
        marginTop='40px'
        border='3px solid #D4DFE3'
        borderRadius='8px'
        width={'80%'}
        position='relative'
        gap={4}
        p={7}
        h="-moz-min-content"
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(4, 1fr)'>
        <GridItem rowSpan={2} colSpan={1}  >
          <div style={{position: 'relative', width: '100%', height: '100%', backgroundColor: '#fff', borderRadius:'6px'}}>
            <Icon style={{position:'absolute', left: '35%', top: '30%'}} color="#EEF4F6" width={'30%'} height={'40%'} icon="mdi:folder-multiple-image" />
          </div>
        </GridItem>
        <GridItem rowSpan={2} colSpan={2}>
          <Text
            boxSizing="border-box"
            fontWeight="bold"
            textTransform="capitalize"
            fontSize="20px"
            letterSpacing="normal"
            color="#000000"
            marginBottom={1}
            fontFamily="body"
            paddingLeft='25px'
          >
            {product}
          </Text>
          <StarRating
           paddingLeft='20px'
            size={24}
            icon="star"
            scale={5}
            fillColor="gold"
            strokeColor="grey"
          />
          <Text  marginLeft={2} paddingLeft='20px' fontSize='16px' marginBottom={'20px'} display={'flex'} color="gray.500">
            {longLine}
          </Text>
          <Box  marginLeft='25px' boxSizing='border-box'>
            <Button  marginBottom={1} marginRight={'15px'} borderRadius={'100px'} w='180px' h='20%' color='#FFFFFF' _hover={{  background: "static",    color: "white", }} fontFamily='body' bgColor='#94A3A8'>
                Ecosystem Developer
            </Button>
              <LastButton>
                <Button marginBottom={1}  borderRadius={'100px'} w='180px' h='20%' color='#FFFFFF' _hover={{  background: "static",    color: "white", }} fontFamily='body' bgColor='#D4DFE3'>
                      <Link>Ecosystem Operator</Link>
                </Button>
              </LastButton>
          </Box>
        
        </GridItem>
           
        <GridItem rowSpan={2} colSpan={1}>
          <GotoButton>
            <Button backgroundColor='#3D4D51' fontFamily='body' color= '#FFFFFF'  _hover={{  background: "static", color: "white" }}>
                  <Link>Go to course</Link>
            </Button>  
          </GotoButton>
        </GridItem>
       </Grid>
      </Container>
  );
}

export default Card;
