import React from "react";
import {
  Box,
  Image,
  Text,
  Link,
  Button,
  Stack
} from "@chakra-ui/react";
import Imageplaceholder from '../stories/assets/Imageplaceholder.png';
import Pic from '../stories/assets/Pic.png';
import StarRating from '../components/StarRating';


function Card(props) {
  const { product, summary, longLine, ecosystemdeveloper } = props;

  return (
    <Box 
      marginTop='40px'
      marginBottom='40px'
      border='4px solid #D4DFE3'
      boxSizing="border-box"
      width='60vw'
      height='256px'
      justifyContent={{md:'space-between'}}
      borderRadius='8px'
      p={7}
      display={{md:'flex'}}
      left='222px'
    >
      <Box>
        <Image w='256px' h='192px' src={Imageplaceholder}
        />
        {/* <Image position='absolute' marginTop='65px' marginLeft='95px' w='72px' h='56px' src={Pic}
        /> */}
        <Image marginTop='-120px' marginLeft='95px' w='72px' h='56px' src={Pic}
        />
      </Box>
      <Stack
        align={{ base: "center", md: "stretch" }}
        textAlign={{ base: "center", md: "left" }}
        mt={{ base: 4, md: 1 }}
        ml='280px'
        position='absolute'
      >
        <Text
          fontWeight="bold"
          textTransform="uppercase"
          fontSize="lg"
          letterSpacing="wide"
          color="#000000"
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
        <Text fontSize='16px' position='absolute' top='60px' color="gray.500">
          {longLine}
        </Text>
        <Button  color='#FFFFFF' _hover={{  background: "static",    color: "white", }} fontFamily='body' bgColor='#3D4D51'>
            <Link>Ecosystem Developer</Link>
        </Button> 
      </Stack>
        <Button  width="131px"  alignSelf='flex-end' height='38px' color='#FFFFFF' _hover={{  background: "static",    color: "white", }} fontFamily='body' bgColor='#3D4D51'>
            <Link>Go to course</Link>
        </Button>        
    </Box>
  );
}

export default Card;
