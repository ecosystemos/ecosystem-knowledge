import React from "react";
import {
  Box,
  Image,
  Text,
  Link,
  Button,
  Stack,
  Badge,
  Grid,
  GridItem,
  color,
  Container
} from "@chakra-ui/react";
import Imageplaceholder from '../stories/assets/Imageplaceholder.png';
import Pic from '../stories/assets/Pic.png';
import StarRating from '../components/StarRating';
import { Icon } from '@iconify/react';

function Card(props) {
  const { product, summary, longLine, ecosystemdeveloper } = props;

  return (
      <Container maxW='container.xl'
      display='flex'
      justifyContent={'center'} >
        <Grid 
        marginTop='40px'
        border='3px solid #D4DFE3'
        borderRadius='8px'
        boxSizing='border-box'
        width={'80%'}
        gap={4}
        p={7}
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(4, 1fr)'>
        <GridItem rowSpan={2} colSpan={1}  >
          <div style={{position: 'relative', width: '100%', height: '100%', backgroundColor: '#fff', borderRadius:'6px'}}>
            <Icon style={{position:'absolute', left: '35%', top: '30%'}} color="#EEF4F6" width={'30%'} height={'40%'} icon="mdi:folder-multiple-image" />
          </div>
        </GridItem>
        <GridItem rowSpan={2} colSpan={2}>
          <Text
            fontWeight="bold"
            textTransform="capitalize"
            fontSize="20px"
            letterSpacing="normal"
            color="#000000"
            marginBottom={1}
            fontFamily="body"
            marginLeft={2}
          >
            {product}
          </Text>
          <StarRating
            size={24}
            icon="star"
            scale={5}
            fillColor="gold"
            strokeColor="grey"
          />
          <Text   marginLeft={2} fontSize='16px' marginBottom={'20px'} display={'flex'} color="gray.500">
            {longLine}
          </Text>
          <Button   marginLeft={2} marginBottom={1} marginRight={'15px'} borderRadius={'100px'} w='180px' h='15%' color='#FFFFFF' _hover={{  background: "static",    color: "white", }} fontFamily='body' bgColor='#94A3A8'>
              Ecosystem Developer
          </Button>
          <Button  marginBottom={1}  borderRadius={'100px'} w='180px' h='15%' color='#FFFFFF' _hover={{  background: "static",    color: "white", }} fontFamily='body' bgColor='#D4DFE3'>
                <Link>Ecosystem Operator</Link>
          </Button>
        </GridItem>
           
       <GridItem  justifySelf={'end'} rowSpan={1} colSpan={1}>
        <Button top='160px' width="131px" height='38px' color='#FFFFFF' _hover={{  background: "static",    color: "white", }} fontFamily='body' bgColor='#3D4D51'>
              <Link>Go to course</Link>
        </Button>  
       </GridItem>
       </Grid>
      </Container>
  );
}

export default Card;
