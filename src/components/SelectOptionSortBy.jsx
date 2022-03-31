import { Select} from '@chakra-ui/react'
import React from 'react'




const SelectOptionSortBy = () => {


    return (
 

        <Select width={"14%"} color="#5A6D72" background={"#FFFFF"} border={"2px solid #D4DFE3"} borderRadius="4px" boxSizing='border-box' size={"xs"} placeholder='Sort by'  >
        <option  value='option1'>Option 1 </option>

        <option value='option2'>Option 2</option>
        <option value='option3'>Option 3</option>
      </Select>

  
      
    )
}

export default SelectOptionSortBy;