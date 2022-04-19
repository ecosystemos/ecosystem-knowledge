import React from 'react'
import { Input, Box,Flex} from '@chakra-ui/react'
import styled from "styled-components"



const AddNewNoteWrapper  = styled.section `
width:50%;
height: 65px;
padding: 16px;
background: #FFFFFF;
box-shadow: 0px 10px 20px -2px rgba(34, 44, 47, 0.08);


`;



const AddNewNote = () => {
  return (
   
    <AddNewNoteWrapper>
     
      <Box >   
   <Input  style={{ 
            background: "#FFFFFF"}} placeholder='Add a new note at 2:15' size='sm' />
   </Box>

     </AddNewNoteWrapper>
  )
}

export default AddNewNote