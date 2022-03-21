import { Select} from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components'




const SelectOptionWrapper = styled.section `

width: 10%;
color: #5A6D72;
background: #FFFFFF;

border: 2px solid #D4DFE3;
box-sizing: border-box;
border-radius: 8px;
`;

const SelectOptionSortBy = () => {


    return (
    <SelectOptionWrapper>

        <Select  placeholder='Sort by'  >
        <option  value='option1'>Option 1 </option>

        <option value='option2'>Option 2</option>
        <option value='option3'>Option 3</option>
      </Select>

      </SelectOptionWrapper>
      
    )
}

export default SelectOptionSortBy;