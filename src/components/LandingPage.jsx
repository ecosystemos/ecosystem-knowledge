import React, { Component } from 'react';
import { Text, Button, Box, Link,HStack, Container, Flex } from '@chakra-ui/react';
import { Image } from '@chakra-ui/image';
import { Link as LinkRouter } from 'react-router-dom';
import Rectangle34 from '../stories/assets/Rectangle34.png';
import Rectangle35 from '../stories/assets/Rectangle35.png'
import { Grid, GridItem } from '@chakra-ui/react';
import Footer from './Footer';
import Polygon1 from '../stories/assets/Polygon1.png'
import { Icon } from '@iconify/react';
import Card from '../components/Card.jsx';
import StarRating from './StarRating';
import Picture from './../stories/assets/Picture.png';
import Ellipse7 from './../stories/assets/Ellipse7.png';
import Ellipse8 from './../stories/assets/Ellipse8.png';
import Ellipse9 from './../stories/assets/Ellipse9.png';
import Ellipse10 from './../stories/assets/Ellipse10.png';
import Ellipse11 from './../stories/assets/Ellipse11.png';
import styled from 'styled-components';




import ReviewCardSlider from './ReviewCardSlider';

export class LandingPage extends Component {
  render() {
    return (
      <>
        {/* <Box display='flex' justifyContent='center' marginTop='30px' bg="#FFFFFF" style={{ height: "80px" }}>
              <NavBar boxSizing="border-box">
                <Button fontFamily='body' _hover={{ bgColor: 'FFFFFF' }} color="black" bg='#FFFFFF' border='none'>About</Button>
                <Button fontFamily='body' _hover={{ bgColor: 'FFFFFF' }} color="black" bg='#FFFFFF' border='none'>Learn</Button>
                <Button fontFamily='body' _hover={{ bgColor: 'FFFFFF' }} color="black" bg='#FFFFFF' border='none'>Connect</Button>
                <Button fontFamily='body' _hover={{ bgColor: 'FFFFFF' }} color="black" bg='#FFFFFF' border='none'>Scale</Button>
                <Button fontFamily='body' _hover={{ bgColor: 'FFFFFF' }} color="black" bg='#FFFFFF' border='none'>Contact</Button>
                <Button fontFamily='body' _hover={{ bgColor: 'FFFFFF' }} color="black" bg='#FFFFFF' border='none'>Log In</Button>
                <Button fontFamily='body' color="white" bg='#3D4D51' border='none'>Sign Up Free</Button>
              </NavBar>
        </Box> */}
        {/* <Container maxW='max-content'> */}
        <Grid  marginTop='30px'  h='80px' bg='#FFFFFF' templateColumns='repeat(7, 1fr)' >
          <GridItem textAlign='center' bg='#FFFFFF' colSpan={5} >
            <Button fontFamily='body' _hover={{ bgColor: 'FFFFFF' }} color="black" bg='#FFFFFF' border='none'>About</Button>
            <Button fontFamily='body' _hover={{ bgColor: 'FFFFFF' }} color="black" bg='#FFFFFF' border='none'>Learn</Button>
            <Button fontFamily='body' _hover={{ bgColor: 'FFFFFF' }} color="black" bg='#FFFFFF' border='none'>Connect</Button>
            <Button fontFamily='body' _hover={{ bgColor: 'FFFFFF' }} color="black" bg='#FFFFFF' border='none'>Scale</Button>
            <Button fontFamily='body' _hover={{ bgColor: 'FFFFFF' }} color="black" bg='#FFFFFF' border='none'>Contact</Button>
          </GridItem>
          <GridItem textAlign='end' marginRight='10%' bg='#FFFFFF' colSpan={2} >
            <Button style={{display: 'inline-block'}} fontFamily='body' _hover={{ bgColor: 'FFFFFF' }} color="black" bg='#FFFFFF' border='none'>Log In</Button>
            <Button style={{display: 'inline-block'}} fontFamily='body' color="white" bg='#3D4D51' border='none'>Sign Up Free</Button>
          </GridItem>
        </Grid>
        <Button style={{marginTop:"10px"}}> <LinkRouter to="/syllabus">Visit to Syllabus Page</LinkRouter></Button>
        <Button style={{marginTop:"10px" , marginLeft:"5px"}}> <LinkRouter to="/notes">Visit to Notes Page</LinkRouter></Button>
          <Box>
            <Grid bg='#F7FBFD' height='100vh'>
              <Flex flexDirection="row">
                <GridItem w='100%'>
                  <Text fontSize='5xl' fontFamily='body' w='400' display='flex' marginTop='134px' justifyContent='space-around'>
                    Level up your <br />Ecosystem Building
                  </Text>
                  <Text fontSize='md' display='flex' justifyContent='space-around' color='#474C66' marginRight='95px' marginTop='15px'>
                    Developing a thriving startup ecosystem is<br /> no small feat! Join our network and begin<br /> to put all the peices together using industry<br />standard practices and your own ingenuity.<br />
                  </Text>
                  <Link fontSize='md' display='flex' justifyContent='center' marginTop='15px' color='#222C2F' alignItems='center' marginRight='132px'>
                    Sign up for our free classes below &#160; &#160;<Icon color='#222C2F' width='15.56px' height='16px' icon="ant-design:arrow-down-outlined" position='absolute' />
                  </Link>
                </GridItem>
                <GridItem  boxSizing="border-box" w="50%" h="575px">

                  <Box style={{ width: "384px", height: "256px", marginLeft: '-30px', bg: '#FFFFF' }}>
                    <Image

                      src={Rectangle34} />
                  </Box>
                  <Box style={{ width: "192px", height: "256px", marginLeft: "220px", marginTop: '-140px', bg: '#FFFFF' }}>
                    <Image

                      src={Rectangle35} />
                  </Box>
                  <Box style={{ width: "630px", height: "630px", opacity: '1.5', marginTop: '-280px', marginLeft:'-40px', bg: '#FFFFF' }}>
                    <Image
                      src={Polygon1} />
                  </Box>

                </GridItem>
              </Flex>
            </Grid>
          </Box>
          <div position='absolute' bg='#F7FBFD'>
            <Grid position='sticky' justifyContent='center'>
              <GridItem marginTop='-250px'>
                <Card product={'Building your Startup Ecosystem'} summary={<StarRating icon="clarity:star-line" />} longLine={'Learn how to build a thriving startup ecosystem. Understand how all the moving parts are related and develop skills to be able to connect...'} />
                <Card product={'Understanding your Ecosystem'} summary={<StarRating />} longLine={'Discover strategies in preparing for, responding to and recovering from bushfire natural disasters from from bushfire natural disasters from  '} />
                <Card product={'Designing your Startup Ecosystem'} summary={<StarRating />} longLine={'Discover strategies in preparing for, responding to and recovering from bushfire natural disasters from from bushfire natural disasters from  '} />
                <Card product={'Connecting People, Businesses and Ideas'} summary={<StarRating />} longLine={'Discover strategies in preparing for, responding to and recovering from bushfire natural disasters from from bushfire natural disasters from  '} />
              </GridItem>
            </Grid>
          </div>
        <Box marginTop='150px'>
            <ReviewCardSlider
              description={'This course provides a great overview of Blender, an extermely powerful (and also incredibly complicated) 3D modeling and animation program. Mikey, the main instructor, is amusing and informative. Both he and Ben student work'}
              lname={'Maurica'}
              fname={'Alejandro'}
              title={'Ecosystem Builder, Barcelona'}
              intervalMS={6100}
              showArrows={true} />
        </Box>
          <Box position='relative' top='200px' marginLeft='500px'>
            <Text color='#777D9C' position='sticky' fontSize={24}>Newsletter</Text>
            <br/>
            <Text  position='sticky' size='20px' color='#202332'>Keep up to date on the latest developments in the startup ecosystem landscape.</Text>
            <br/>
            <Button  position='sticky' color='#FFFFFF' bgColor='#3D4D51'>
              Sign me up for your weekly newsleter
            </Button>
          </Box>
          <Box marginTop='-145px'>
            <Image src={Ellipse7} w='499px' height='730px' marginLeft='400px' background='#F7FBFD'></Image>
          </Box>
        {/* </Container> */}
      </>
    );
  }
}
export default LandingPage;
