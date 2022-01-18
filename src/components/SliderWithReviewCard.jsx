/**
 * yarn add react-responsive-carousel
 * "react-responsive-carousel": "^3.2.20",
 */
 import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
 import { Carousel } from 'react-responsive-carousel';
 import ReviewCard from '../components/ReviewCard';
 import styled from "styled-components";
 
 
 const CaroStyle = styled.div `
 .carousel .control-dots .dot
 {
     background: #82C6E3;
     box-shadow: 0px 4px 8px rgba(76, 166, 205, 0.2);
     width:16px;
     height:16px;
 }
 
 .carousel .control-dots .dot.selected,.carousel .control-dots .dot:hover
 {
     opacity:1;filter:alpha(opacity=100);
     width:18px;
     height:18px;
 }
 `;
 
 export const SliderWithReviewCard = ({ description, fname, title, lname, ...props}) =>{

    const initialState = {
        description:'This course provides a great overview of Blender, an extermely powerful (and also incredibly complicated) 3D modeling and animation program. Mikey, the main instructor, is amusing and informative. Both he and Ben student work' ,
        lname: 'Maurica',
        fname: 'Alejandro',
        title: 'Ecosystem Builder, Barcelona'
      
    }


     return(
         <CaroStyle>
         <Carousel
       showArrows={true}
       infiniteLoop={true}
       showThumbs={true}
       showStatus={false}
       autoPlay={true}
       interval={6100}//6100
     >
        <ReviewCard   description = {initialState.description} fname={initialState.fname} lname={initialState.lname} title={initialState.title} />
        <ReviewCard   description = {initialState.description} fname={initialState.fname} lname={initialState.lname} title={initialState.title} />
        <ReviewCard   description = {initialState.description} fname={initialState.fname} lname={initialState.lname} title={initialState.title} />
        <ReviewCard   description = {initialState.description} fname={initialState.fname} lname={initialState.lname} title={initialState.title} />
      
    </Carousel>
    </CaroStyle>
     )
 };
 
 export default SliderWithReviewCard;