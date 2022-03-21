import { Input } from '@chakra-ui/react'
import React from 'react'
import styled from "styled-components"

const SearchWrapper = styled.section `

width: 18%;
left: 32px;
top: 16px;

/* white */

background: #FFFFFF;
/* /Grey/300 */

border: 2px solid #D4DFE3;
box-sizing: border-box;
border-radius: 8px;



`;


function Search() {
  return (

 <SearchWrapper> <Input  placeholder='Search'  /> </SearchWrapper>

  


  )
}

export default Search