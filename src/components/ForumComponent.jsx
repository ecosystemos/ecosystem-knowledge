import { Box } from '@chakra-ui/react';
import React from 'react'
import styledComponents from 'styled-components';


const BacgroundWrapper = styled.section `

width: 1440px;
height: 640px;
left: 0px;
top: 0px;



background: #4CA6CD;

`;

const ForumComponent = () => {
  return (
    <BacgroundWrapper>
                <Box>
                    <Text> </Text>
                    <Text> </Text>
                    <ButtonLabel buttonText="Hİ" ></ButtonLabel>
                </Box>
                <Box> </Box>

    </BacgroundWrapper>
  )
}

export default ForumComponent