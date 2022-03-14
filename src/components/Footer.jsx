import React from 'react'
import { Box, Flex, Spacer,SimpleGrid,ButtonGroup,IconButton,Text,Link } from '@chakra-ui/react'
import {FaLinkedin, FaTwitter, FaFacebook} from 'react-icons/fa'
import logoImage from '../stories/assets/scLogo.png'
import { Image } from '@chakra-ui/image';
import styled from "styled-components";
import { Icon } from '@iconify/react';
// import ButtonLabel from './ButtonLabel';

import PropTypes from 'prop-types';
import  ButtonLabel from './ButtonLabel';







const FooterContentWtrapper = styled.section`


color: white;
display : flex;
flex-direction: column;
text-align: left;








`;





const CopyrightWrapper = styled.section`


display: flex;
flex-direction: row;
font-size: 14px;
color: white;
margin-top: 14px;
padding-right:10px;






`;

const LinkIconWrapper = styled.section`

display: flex;
flex-direction: row;
width: 200px;


`;


const SocialMediaIconsWrapper = styled.section `


&:hover {

  color:#004766;

}

`;


const TwitterIconWrapper = styled.section `


&:hover {

  color:rgb(29, 155, 240);

}

`;




export const Footer = ({color,buttonText,buttonWidth,buttonHeight,buttonColor, height}) => {
    return (
      <React.Fragment>


<Box bg={color} w='100%' h='386' p={4}>
<SimpleGrid columns={1} spacing={10}>
<Box bg={color} height='110px'>
  <Flex>
    <Spacer />

    <Box w='21%' h='300px' bg={color}> 
    <Image  style={{ width: "50%", height: "50px"}}    
    src={logoImage}   >
      </Image> 
      <Text 
      style={{color:"white",width: "90%", height: "50px" , fontSize: "14px",marginTop:"7px", textAlign: "left"}}>
         Scaling entrepreneurship and innovation around the world by connecting innovators, local businesses and governments.
         </Text></Box>
    <Spacer />


    <Box w='21%' h='300px' bg={color}> 
    <FooterContentWtrapper>
    <Text style={{marginBottom :"10px" , fontWeight:"bold"}}>About US </Text>
    <Link style={{marginBottom :"10px"}}>About Startup Commons</Link>
    <Link style={{marginBottom :"10px"}}>How it works</Link>
    <Link style={{marginBottom :"10px"}}>Contact Us</Link>
    <Link style={{marginBottom :"10px"}}>Help</Link>
    <Link style={{marginBottom :"10px"}}>Press</Link>
    <Link >In the news</Link>
    </FooterContentWtrapper>
    
    
    
    
    
  
    </Box>


    <Spacer />

   
    <Box w='21%' h='300px' bg={color}> 
 
<FooterContentWtrapper>
<Text style={{marginBottom :"10px" , fontWeight:"bold"}}>About You</Text>
<Text style={{ fontWeight: "500"}}>Ecosystem Builders</Text>
<Text style={{ fontSize: "14px"}}>How to buy pharmaceuticals through cooperative bidding</Text>
<LinkIconWrapper><Link style={{marginBottom :"10px",fontSize: "10px",marginTop:"3px"  }}>
 Get started   

  
  </Link>  <Link> <Icon   style={{fontSize: "13px" , marginLeft:"15px",marginTop:"3px"}} icon="bi:box-arrow-up-right" /> </Link></LinkIconWrapper><Text style={{  fontWeight: "500"}}>Ecosystem Providers</Text>
<Text style={{ fontSize: "14px"}}>How to sell your goods and earn a fair price</Text>
<LinkIconWrapper><Link style={{marginBottom :"10px",fontSize: "10px",marginTop:"3px"  }}>
 Get started   

  
  </Link>  <Link> <Icon   style={{fontSize: "13px" , marginLeft:"15px",marginTop:"3px"}} icon="bi:box-arrow-up-right" /> </Link></LinkIconWrapper><Text style={{  fontWeight: "500"}}>Ecosystem Operators</Text>
<Text style={{ fontSize: "14px"}}>How to conveniently order fairly priced medication online</Text>
<LinkIconWrapper><Link style={{marginBottom :"10px",fontSize: "10px",marginTop:"3px"  }}>
 Get started   

  
  </Link>  <Link> <Icon   style={{fontSize: "13px" , marginLeft:"15px",marginTop:"3px"}} icon="bi:box-arrow-up-right" /> </Link></LinkIconWrapper>



 
</FooterContentWtrapper>


    </Box>

    <Spacer />

    <Box w='21%' h='300px' bg={color}> 
    
    <FooterContentWtrapper>

<Text style={{marginBottom :"10px" , fontWeight:"bold"}}>Get in Touch</Text>
<Text style={{ fontSize: "14px"}}>info@startupcommons.com</Text>
<Text style={{marginBottom :"10px" , fontSize: "14px"}}>1-800-456-2020</Text>
<Text style={{ marginBottom :"10px" , fontWeight: "500"}}>Stay connected with the lastest trends in ecosystem building</Text>
<ButtonLabel buttonText={buttonText} buttonColor={buttonColor} buttonHeight={buttonHeight} buttonWidth={buttonWidth}></ButtonLabel>


    </FooterContentWtrapper>

    </Box>


    <Spacer />  
  </Flex>
  </Box>
  <Spacer />  
  <Spacer />  
  <Spacer />  
  <Spacer />  
  <Box bg={color} height='60px'>
  <Flex>
  <Spacer />


    <Box w='50%' h='50px' bg={color}>  
    <CopyrightWrapper>
    <Text style={{ marginRight :"15px"}}>Copyright © 2019 Unirever, Inc.</Text>
    <Link style={{ marginRight :"15px"}}>Site Map</Link>
    <Link style={{ marginRight :"15px"}}>Privacy</Link>
    <Link >Terms of use </Link>
    </CopyrightWrapper>

    
    
    </Box>

   
    <Box w='45%' h='50px' bg={color} >

         <ButtonGroup  style={{marginLeft:"360px"}}variant="ghost" color="white" >
        <SocialMediaIconsWrapper>
         <IconButton as="a" href="#" aria-label="Facebook" icon={<FaFacebook fontSize="20px" />} />    </SocialMediaIconsWrapper>
         <TwitterIconWrapper><IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter fontSize="20px" />} />   </TwitterIconWrapper>
         <SocialMediaIconsWrapper> <IconButton as="a" href="#" aria-label="LinkedIn" icon={<FaLinkedin fontSize="20px" />} />   </SocialMediaIconsWrapper>

  </ButtonGroup>

    </Box>
    <Spacer />
    </Flex>
  </Box>

  </SimpleGrid>
  </Box>







  </React.Fragment>

    )



 

}

Footer.propTypes = {
    color: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
   
    
    
};
export default Footer
