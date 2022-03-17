import React from 'react'
import { Input, Box,Flex} from '@chakra-ui/react'
import styled from "styled-components"



const AddNewNoteWrapper  = styled.section `
width: 90%;
height:100px;
padding: auto auto auto auto; 

;



`;

const AddNewNote = () => {
  return (
    <AddNewNoteWrapper>
     
      <Box >   
   <Input  style={{ width: "47%",

            background: "#FFFFFF"}} placeholder='Add a new note at 2:15' size='lg' />
   </Box>

     </AddNewNoteWrapper>
  )
}

export default AddNewNote