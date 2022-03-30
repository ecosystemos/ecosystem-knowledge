import { Flex,Box,Grid,GridItem, Spacer} from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components';
import Search from './Search';
import SelectOptionSortBy from './SelectOptionSortBy';

const SortAndSearchWrapper = styled.section `

padding: 16px 32px;
background: #FFFFFF;
width: 50%;
display:flex;
flex-direction: row;


`;

const SortAndSearch = () => {
  return (

    <SortAndSearchWrapper> 
    
       
    <Search></Search>
    <Spacer></Spacer>
    <SelectOptionSortBy> </SelectOptionSortBy>
   
    
     </SortAndSearchWrapper>
  )
}

export default SortAndSearch