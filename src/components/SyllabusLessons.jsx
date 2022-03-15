import React,{useState} from 'react'
import { Box, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Checkbox,Text,Divider,Spacer, Flex} from '@chakra-ui/react'
import styled from 'styled-components'
import { Icon } from '@iconify/react';
import SelectOptionResources from './SelectOptionResources';
import PropTypes from 'prop-types';
import Progress from './Progress';




const SyllabusWrapper = styled.section `

display: block;
  margin-left: 26%;

  width: 55%;
  margin-top: 0;
  margin-bottom: 5%;

`;


const ThickTextWrapper = styled.section `

font-weight: bold;
margin-left: 5px;

`;

const AccordionItemContextWrapper = styled.section `


margin-left: 5%;

`;

const VideoIconTextSelectWrapper = styled.section `

display:flex;
flex-direction: row;
top:8%;
margin-left: 4%;
margin-bottom: 4%;





`;

// const SelectOptionWrapper = styled.section `

// width:100%;






// `;


const SyllabusContextMarginTopWrapper = styled.section `

margin-top:64px;
`;



const SyllabusLessons = ( {header, learningObjectives, description,headerColor}) => {

  const [moduleStatus, setmoduleStatus] = useState(true);

  const acordionModuleHandle = () => {

     moduleStatus===true ?  setmoduleStatus(false) : setmoduleStatus(true);

  }
   console.log(moduleStatus)
    return (
        <React.Fragment>
 

<SyllabusWrapper>

<Flex direction={'row'}> 

      <Box w="100%" >
      <SyllabusContextMarginTopWrapper>
            <Text fontSize='32px'  color={headerColor}  style={{textAlign:"left", marginBottom:"16px"}}>{header}</Text>
            <Text fontSize='20px'  color="#222C2F"  style={{textAlign:"left", marginBottom:"8px"}}>{learningObjectives}</Text>
            <Text fontSize='16px'  color="#5A6D72"  style={{textAlign:"left", marginBottom:"32px"}}>{description}</Text>

        <Accordion   allowMultiple >
  <AccordionItem>
 
      <AccordionButton onClick={acordionModuleHandle} >
      <Flex style={{ display:"flex", flexDirection:"column"}}>
        <Box>
            <Box flex='1' textAlign='left' style={{ display:"flex", flexDirection:"row"}}> <Checkbox style = {{marginRight: "10px" , marginTop:"5px"}} ></Checkbox>
                Module 1: <ThickTextWrapper> Startup Journey</ThickTextWrapper>
              
             
               
            </Box>
         
        </Box>
        
        <Box style={{textAlign:"left", paddingLeft:"27px", fontSize:"12px", color:"#5A6D72" }}>  { moduleStatus===false && <p>Module 1 of 10  (1 hours 23 min)</p>}</Box>
     
        </Flex>
        <Spacer></Spacer>
        <AccordionIcon  />
      </AccordionButton>
 

    <AccordionPanel pb={4}>


    <AccordionItemContextWrapper>   

         <Divider /> 
        <Box flex='1' textAlign='left' style={{ display:"flex", flexDirection:"row"}}> <Checkbox style = {{marginRight: "10px" , marginTop:"5px"}} ></Checkbox>
        Leson 1:  <ThickTextWrapper> Inroduction</ThickTextWrapper>
        </Box>
       <VideoIconTextSelectWrapper>
           <Icon style={{color:"#D4DFE3",marginTop: "1%", marginRight:"1%"}}    icon="fluent:video-clip-20-regular" width="15" /> 
       <Text style={{color:"#5A6D72", fontSize:"12px"}}>9 min</Text> 
       <Spacer></Spacer>
        <SelectOptionResources></SelectOptionResources> 
        </VideoIconTextSelectWrapper> 



        <Divider />
        <Box flex='1' textAlign='left' style={{ display:"flex", flexDirection:"row"}}> <Checkbox style = {{marginRight: "10px" , marginTop:"5px"}} ></Checkbox>
        Lesson 2:  <ThickTextWrapper>Innovation & Entrepeneurship</ThickTextWrapper>
        </Box>
        <VideoIconTextSelectWrapper>
           <Icon style={{color:"#D4DFE3",marginTop: "1%", marginRight:"1%"}}    icon="fluent:video-clip-20-regular" width="15" /> 
       <Text style={{color:"#5A6D72", fontSize:"12px"}}>59 min</Text> 
       <Spacer/> <SelectOptionResources></SelectOptionResources> 
        </VideoIconTextSelectWrapper> 


        <Divider />
        <Box flex='1' textAlign='left' style={{ display:"flex", flexDirection:"row"}}> <Checkbox style = {{marginRight: "10px" , marginTop:"5px"}} ></Checkbox>
        Lesson 3: <ThickTextWrapper>  Success & Failure Factors</ThickTextWrapper>
        </Box>

        <VideoIconTextSelectWrapper>
           <Icon style={{color:"#D4DFE3",marginTop: "1%", marginRight:"1%"}}    icon="fluent:video-clip-20-regular" width="15" /> 
       <Text style={{color:"#5A6D72", fontSize:"12px"}}>22 min </Text> 
       <Spacer/> <SelectOptionResources></SelectOptionResources> 
        </VideoIconTextSelectWrapper> 

        <Divider />
        <Box flex='1' textAlign='left' style={{ display:"flex", flexDirection:"row"}}> <Checkbox style = {{marginRight: "10px" , marginTop:"5px"}} ></Checkbox>
        Lesson 4:  <ThickTextWrapper> Investors and Valuation</ThickTextWrapper>    
        </Box>

        <VideoIconTextSelectWrapper>
           <Icon style={{color:"#D4DFE3",marginTop: "1%", marginRight:"1%"}}    icon="fluent:video-clip-20-regular" width="15" /> 
       <Text style={{color:"#5A6D72", fontSize:"12px"}}>1:02 min</Text> 
       <Spacer/><SelectOptionResources/>  
        </VideoIconTextSelectWrapper> 

        <Divider />
        <Box flex='1' textAlign='left' style={{ display:"flex", flexDirection:"row"}}> <Checkbox style = {{marginRight: "10px" , marginTop:"5px"}} ></Checkbox>
        Lesson 5:  <ThickTextWrapper> Startup Development Phases</ThickTextWrapper>    
        </Box>

        <VideoIconTextSelectWrapper>
           <Icon style={{color:"#D4DFE3",marginTop: "1%", marginRight:"1%"}}    icon="fluent:video-clip-20-regular" width="15" /> 
       <Text style={{color:"#5A6D72", fontSize:"12px"}}>1:02 min</Text> 
       <Spacer/> <SelectOptionResources   ></SelectOptionResources> 
        </VideoIconTextSelectWrapper> 




    </AccordionItemContextWrapper>



    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left' style={{ display:"flex", flexDirection:"row"}}> <Checkbox style = {{marginRight: "10px" , marginTop:"5px"}} ></Checkbox>
        Module 2:  <ThickTextWrapper>Formation</ThickTextWrapper>
        </Box>
        <AccordionIcon />
        


        
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left' style={{ display:"flex", flexDirection:"row"}}> <Checkbox style = {{marginRight: "10px" , marginTop:"5px"}} ></Checkbox>
        Module 3: <ThickTextWrapper>Validation</ThickTextWrapper>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left' style={{ display:"flex", flexDirection:"row"}}> <Checkbox style = {{marginRight: "10px" , marginTop:"5px"}} ></Checkbox>
        Module 4: <ThickTextWrapper>Scaling</ThickTextWrapper>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>

  
</Accordion>





</SyllabusContextMarginTopWrapper>

      </Box>



      <Box w="50%" > 
      <Progress></Progress>
      </Box>

</Flex>





</SyllabusWrapper>








</React.Fragment>
    )
}

export default SyllabusLessons;

SyllabusLessons.propTypes = {
  header: PropTypes.string.isRequired,
  learningObjectives: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  headerColor: PropTypes.string.isRequired,
 

};
