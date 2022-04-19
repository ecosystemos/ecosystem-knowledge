import React from 'react'
import { Text } from '@chakra-ui/react'
import styled from "styled-components"


const TakeNotesHeaderWrapper = styled.section `

    text-align:left;
    width:50%;

`;



const TakeNotesHeader = () => {
  return (
        <React.Fragment>
        <TakeNotesHeaderWrapper>
            <Text fontSize='32px'  color={"#82C6E3"}  style={{ marginBottom:"16px"}}>Notes</Text>
            <Text fontSize='20px'  color="#222C2F"  style={{ marginBottom:"8px"}}>Building your Startup Ecosystem</Text>
            <Text fontSize='16px'  color="#5A6D72"  style={{ marginBottom:"32px"}}>Put what you learned into practice! Create and manage your tasks</Text>
            </TakeNotesHeaderWrapper>
        </React.Fragment>
  )
}

export default TakeNotesHeader  