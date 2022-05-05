import React from 'react';
import {Box,Image,Text,FormControl,FormLabel,Input,FormHelperText,Button,Flex,Form} from '@chakra-ui/react'
import charcoInbox from '../stories/assets/CharcoInbox.png'
import styled from 'styled-components';
import PropTypes from 'prop-types';




const NewsletterWrapper = styled.section`
align-items: center;
padding: 5% 5% 5% 5%;
  background:#F7FBFD;

`;
const HeadWrapper    = styled.section`
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 36px;
line-height: 48px;
color: #3D4D51;

`;
const TextWrapper    = styled.section`
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 30px;
/* identical to box height, or 150% */


/* /Grey/500 */

color: #5A6D72;


`;



 const Newsletter = ({header,text,buttonText,buttonAndFormColor,placeholderText}) => {


  const ButtonWrapper = styled.section`

font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 16px;
/* identical to box height, or 114% */

text-align: center;
letter-spacing: 0.04em;

/* /Grey/50 (white) */

color: #FFFFFF;
background: ${buttonAndFormColor};
border-end-end-radius: 5px;
border-top-right-radius: 5px;
`;


const InputWrapper = styled.section`

border-color:${buttonAndFormColor};
border-style: solid;
  border-width: 4px;
  border-left-width:4px;

`;


  return (

<NewsletterWrapper>
    <Flex flexDirection={"row"}>

           
                    <Box  style={{display:"flex",flexDirection:"column", width:"60%", padding: "8% 5% 5% 5%"}}  >
                       
                        <HeadWrapper> <Text style={{marginBottom:"28px"}}>{header} </Text> </HeadWrapper>
                        <Flex flexDirection={"row"} style={{marginBottom:"28px"}}>
                        <FormControl style={{width:"57%"}} >
                       
                        <InputWrapper> <Input   border={"2PX"} style={{color:buttonAndFormColor, width:"101%",height:"35px",}} id='email' type='email' placeholder={placeholderText} /></InputWrapper>
                       
                        </FormControl>
                        <ButtonWrapper><Button  colorScheme={buttonAndFormColor} variant='solid'>
                        {buttonText}
                        </Button></ButtonWrapper>
                        </Flex>
                        <TextWrapper> <Text>{text} </Text>    </TextWrapper>

                        

                    </Box>
                    
                    <Box >
                    <Image  src={charcoInbox} alt='Charco Inbox' />
                    </Box>

        

    </Flex>

    </NewsletterWrapper>


  );
};

export default Newsletter;

Newsletter.propTypes = {
  header: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonAndFormColor: PropTypes.string.isRequired,
  placeholderText: PropTypes.string.isRequired,

};

