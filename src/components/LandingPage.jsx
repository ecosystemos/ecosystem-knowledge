import React, { Component } from 'react';
import { Text, Button, Box, Link, Spacer,HStack, Container } from '@chakra-ui/react';
import { Image } from '@chakra-ui/image';
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



import ReviewCardSlider from './ReviewCardSlider';

export class LandingPage extends Component {
  render() {
    return (
      <>
        <HStack bg="#FFFFFF" >
          <Container maxW='container.lg'   style={{ height: "116px", paddingTop:'40px', alignItems: 'center'}} >
            <Button fontFamily='body'  _hover={{ bgColor: '#FFFFFF' }} color="black" bg='#FFFFFF' border='none' >About</Button>
            <Button fontFamily='body'  _hover={{ bgColor: '#FFFFFF' }} color="black" bg='#FFFFFF' border='none'>Learn</Button>
            <Button fontFamily='body'  _hover={{ bgColor: '#FFFFFF' }} color="black" bg='#FFFFFF' border='none' >Connect</Button>
            <Button fontFamily='body'  _hover={{ bgColor: '#FFFFFF' }} color="black" bg='#FFFFFF' border='none' >Scale</Button>
            <Button fontFamily='body'  _hover={{ bgColor: '#FFFFFF' }} color="black" bg='#FFFFFF' border='none'>Contact</Button>
            <Button fontFamily='body'  _hover={{ bgColor: '#FFFFFF' }} color="black" bg='#FFFFFF' border='none'  >Log In</Button>
            <Button fontFamily='body'  _hover={{ bgColor: '#3D4D51' }} color="white" bg='#3D4D51' border='none'  >Sign Up Free</Button>
          </Container>
        </HStack>
      <Container maxW='container.xl'>
        <Grid w='100%' height='100vh'>
            <GridItem w='50%'>
              <Text fontSize='5xl' fontFamily='body' w='400' display='flex' marginTop='134px' justifyContent='space-around'>
                Level up your <br/>Ecosystem Building
              </Text>
              <Text fontSize='md' display='flex' justifyContent='space-around'  color='#474C66' marginRight='95px' marginTop='15px'>
                Developing a thriving startup ecosystem is<br/> no small feat! Join our network and begin<br/> to put all the peices together using industry<br/>standard practices and your own ingenuity.<br/>
              </Text>
              <Link fontSize='md' display='flex' justifyContent='center' marginTop='15px' color='#222C2F' alignItems='center' marginRight='132px' >
                Sign up for our free classes below &#160; &#160;<Icon color='#222C2F' width='15.56px' height='16px' icon="ant-design:arrow-down-outlined"  position='absolute'/>
              </Link>
            </GridItem>
            <GridItem position='relative' w='50%'>
                <Image 
                  style={{ width: "384px", height: "256px", top: '-200%', left: '904px', position: 'absolute', bg:'#FFFFF'}}
                  src={Rectangle34}
                />
                <Image 
                  style={{ width: "192px", height: "256px", top: '-160%', left: '1130px', position:'absolute', bg:'#FFFFF' }}
                  src={Rectangle35}
                />
                <Image 
                  style={{ width: "630px", height: "630px", opacity: '0.5', top: '-170%', left: '904px', position:'absolute', bg:'#FFFFF' }}
                  src={Polygon1}
                />
            </GridItem>
        </Grid>
        <div background-image={<Image width='100%' src={Picture} zIndex='999'></Image>} position='relative' bg='#F7FBFD'>
        <Grid position='sticky' justifyContent='center'>
          <GridItem marginTop='-30%'>
            <Card  product={'Building your Startup Ecosystem'} summary={<StarRating  icon="clarity:star-line"/>} longLine={'Learn how to build a thriving startup ecosystem. Understand how all the moving parts are related and develop skills to be able to connect...'}/>
            <Card  product={'Understanding your Ecosystem'} summary={<StarRating />} longLine={'Discover strategies in preparing for, responding to and recovering from bushfire natural disasters from from bushfire natural disasters from  '}/>
            <Card  product={'Designing your Startup Ecosystem'} summary={<StarRating />} longLine={'Discover strategies in preparing for, responding to and recovering from bushfire natural disasters from from bushfire natural disasters from  '}/>
            <Card  product={'Connecting People, Businesses and Ideas'} summary={<StarRating />} longLine={'Discover strategies in preparing for, responding to and recovering from bushfire natural disasters from from bushfire natural disasters from  '}/>
          </GridItem>
        </Grid>
        </div>
      </Container>
      {/* <div background-image={this.url({Picture})}>
asd
      </div> */}
      <div background-image={Picture} position='relative' bg='#F7FBFD'>
        <Box>
            <ReviewCardSlider
              description= {'This course provides a great overview of Blender, an extermely powerful (and also incredibly complicated) 3D modeling and animation program. Mikey, the main instructor, is amusing and informative. Both he and Ben student work'}
              lname= {'Maurica'}
              fname= {'Alejandro'}
              title= {'Ecosystem Builder, Barcelona'}
              intervalMS= {6100}
              showArrows={true}
            /> 
        </Box>
      </div>
        <Box >
          {/*  */}
          {/* <Image width='100vw' src={Vector1}></Image> 
          <Image width='100vw' marginTop='-400px' src={Vector2}></Image>  
          <Image width='100vw' marginTop='-400px' src={Vector3}></Image>
          <Image width='100vw' src={Vector4}></Image> */}
          <Image src={Ellipse7} background='#F7FBFD' ></Image>
        </Box>

        <Footer 
            color={"#004766"}
            buttonText={"Sign me up!"}
            buttonColor={"#0E5E81"}
            buttonWidth={"135px"}
            buttonHeight={"40px"}          
          /> 
      </>
    );
  }
}


export default LandingPage;
