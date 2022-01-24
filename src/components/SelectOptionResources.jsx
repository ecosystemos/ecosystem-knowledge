import { Select} from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components'




const SelectOptionWrapper = styled.section `

width: 30%;
color: #5A6D72;

`;

const SelectOptionResources = () => {


    return (
    <SelectOptionWrapper>

        <Select  placeholder='Resources'  >
        <option  value='option1'>Option 1 </option>

        <option value='option2'>Option 2</option>
        <option value='option3'>Option 3</option>
      </Select>

      </SelectOptionWrapper>
      
    )
}

export default SelectOptionResources;