import React from 'react'
import { Box, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Checkbox,Text,Divider,Spacer} from '@chakra-ui/react'
import styled from 'styled-components'
import { Icon } from '@iconify/react';
import SelectOptionResources from './SelectOptionResources';



const SyllabusWrapper = styled.section `

display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
  margin-top: 5%;
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

const SelectOptionWrapper = styled.section `

width:100%;






`;



const SyllabusPage = () => {
    return (
        <React.Fragment>
     
        <SyllabusWrapper>
            <Text fontSize='32px'  color="#82C6E3"  style={{textAlign:"left", marginBottom:"16px"}}>Syllabus</Text>
            <Text fontSize='20px'  color="#222C2F"  style={{textAlign:"left", marginBottom:"8px"}}>Building your Startup Ecosystem</Text>
            <Text fontSize='16px'  color="#5A6D72"  style={{textAlign:"left", marginBottom:"32px"}}>Put what you learned into practice! Create and manage your tasks</Text>

        <Accordion  defaultIndex={[0]} allowMultiple >
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left' style={{ display:"flex", flexDirection:"row"}}> <Checkbox style = {{marginRight: "10px" , marginTop:"5px"}} ></Checkbox>
        Module 1: <ThickTextWrapper> Startup Journey</ThickTextWrapper>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>


    <AccordionItemContextWrapper>   

         <Divider /> 
        <Box flex='1' textAlign='left' style={{ display:"flex", flexDirection:"row"}}> <Checkbox style = {{marginRight: "10px" , marginTop:"5px"}} ></Checkbox>
        Leson 1:  <ThickTextWrapper> Inroduction</ThickTextWrapper>
        </Box>
       <VideoIconTextSelectWrapper>
           <Icon style={{color:"#D4DFE3",marginTop: "1%", marginRight:"1%"}}    icon="fluent:video-clip-20-regular" width="15" /> 
       <Text style={{color:"#5A6D72"}}>9 min</Text> 
       <Spacer></Spacer>
        <SelectOptionResources></SelectOptionResources> 
        </VideoIconTextSelectWrapper> 



        <Divider />
        <Box flex='1' textAlign='left' style={{ display:"flex", flexDirection:"row"}}> <Checkbox style = {{marginRight: "10px" , marginTop:"5px"}} ></Checkbox>
        Lesson 2:  <ThickTextWrapper>Innovation & Entrepeneurship</ThickTextWrapper>
        </Box>
        <VideoIconTextSelectWrapper>
           <Icon style={{color:"#D4DFE3",marginTop: "1%", marginRight:"1%"}}    icon="fluent:video-clip-20-regular" width="15" /> 
       <Text style={{color:"#5A6D72"}}>59 min</Text> 
       <Spacer/> <SelectOptionResources></SelectOptionResources> 
        </VideoIconTextSelectWrapper> 


        <Divider />
        <Box flex='1' textAlign='left' style={{ display:"flex", flexDirection:"row"}}> <Checkbox style = {{marginRight: "10px" , marginTop:"5px"}} ></Checkbox>
        Lesson 3: <ThickTextWrapper>  Success & Failure Factors</ThickTextWrapper>
        </Box>

        <VideoIconTextSelectWrapper>
           <Icon style={{color:"#D4DFE3",marginTop: "1%", marginRight:"1%"}}    icon="fluent:video-clip-20-regular" width="15" /> 
       <Text style={{color:"#5A6D72"}}>22 min </Text> 
       <Spacer/> <SelectOptionResources></SelectOptionResources> 
        </VideoIconTextSelectWrapper> 

        <Divider />
        <Box flex='1' textAlign='left' style={{ display:"flex", flexDirection:"row"}}> <Checkbox style = {{marginRight: "10px" , marginTop:"5px"}} ></Checkbox>
        Lesson 4:  <ThickTextWrapper> Investors and Valuation</ThickTextWrapper>    
        </Box>

        <VideoIconTextSelectWrapper>
           <Icon style={{color:"#D4DFE3",marginTop: "1%", marginRight:"1%"}}    icon="fluent:video-clip-20-regular" width="15" /> 
       <Text style={{color:"#5A6D72"}}>1:02 min</Text> 
       <Spacer/><SelectOptionResources/>  
        </VideoIconTextSelectWrapper> 

        <Divider />
        <Box flex='1' textAlign='left' style={{ display:"flex", flexDirection:"row"}}> <Checkbox style = {{marginRight: "10px" , marginTop:"5px"}} ></Checkbox>
        Lesson 5:  <ThickTextWrapper> Startup Development Phases</ThickTextWrapper>    
        </Box>

        <VideoIconTextSelectWrapper>
           <Icon style={{color:"#D4DFE3",marginTop: "1%", marginRight:"1%"}}    icon="fluent:video-clip-20-regular" width="15" /> 
       <Text style={{color:"#5A6D72"}}>1:02 min</Text> 
       <Spacer/> <SelectOptionResources></SelectOptionResources> 
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





</SyllabusWrapper>

</React.Fragment>
    )
}

export default SyllabusPage
