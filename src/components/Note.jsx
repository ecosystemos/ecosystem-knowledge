import { Flex,Box , Image ,Text} from '@chakra-ui/react'
import React from 'react'
import { Icon } from '@iconify/react';
import styled from 'styled-components';

const NoteWrapper = styled.section `

padding: 16px 32px;
background: #FFFFFF;
width: 50%;

`;

const TextWrapper = styled.section `

padding: 16px 56px 16px 64px;
background: #F7FBFD;
border-radius: 4px;
width: 99%;
margin-top:25px;



`;


const Note = () => {
  return (
    <NoteWrapper>
    <Flex direction={"column"} > 
              
            <Flex direction={"row"}>
                 <Text> 18:06</Text>
                <Box marginLeft={"30px"} marginTop={"7px"}> <Icon icon="gg:notes" color="#5A6D72" height="11" width="11" /></Box> 
                <Box marginLeft={"7px"}> 6. Building your Startup Ecosystem</Box>
                <Box marginLeft={"10px"} color="#5A6D72">  2. What is a Startup Ecosystem? </Box>
                <Box marginLeft={"120px"} marginTop={"5px"}> <Icon icon="ph:pencil-line-light"  color="#5A6D72"   height="13" width="13" /> </Box>
                <Box marginLeft={"10px"} marginTop={"5px"}> <Icon icon="akar-icons:trash-can"  color="#5A6D72" height="13" width="13" /></Box> 
            </Flex>
                <TextWrapper> 
            <Box> <Text> All the peices fit together like a puzzle. If one peice is broken, the others will not fit together properly. Remember to keep track of everything and keep ahead of the game so as not to miss the important bits. Speaking to colleagues regarding these issues is a good idea. </Text> </Box>
            </TextWrapper>

    </Flex>
    </NoteWrapper>
  )
}

export default Note