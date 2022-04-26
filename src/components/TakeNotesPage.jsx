import React from 'react'
import AddNewNote from './AddNewNote'
import Navbar from './Navbar'
import {Text} from "@chakra-ui/react"
import Note from './Note'
import SortAndSearch from './SortAndSearch'
import styled from "styled-components"
import Newsletter from './Newsletter'
import TakeNotesHeader from './TakeNotesHeader'
import MappingComponent from './MappingComponent'
import CTAexploreSite from './CTAexploreSite'

const TakeNotesItemsWrapper = styled.section `
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
text-align:left;
margin-top:64px;
margin-bottom:128px;

`;


function TakeNotesPage() {
  return (
      <React.Fragment>
    <Navbar
    navbarColor={"#0E5E81"}
    firstTab={"Syllabus"}
    secondTab= {"Q & A"}
    thirdTab= {"Notes"}
    fourthTab={"Take Action"}
  />

<TakeNotesItemsWrapper>
    
    <TakeNotesHeader></TakeNotesHeader>

    <AddNewNote > </AddNewNote>

    <SortAndSearch></SortAndSearch>
    <Note></Note>
    <Note></Note>
    <Note></Note>
    <Note></Note>
    <Note></Note>
    </TakeNotesItemsWrapper>
    <MappingComponent> </MappingComponent>

    <Newsletter 
          header={"Sign up for Startup Commons newsletter"}
          text="We’ll keep you up to date on all things Startup Ecosystems!"
          buttonText={"Sign me up"}
          buttonAndFormColor={"#004766;"}
          placeholderText={'Enter Your Email'}   
        ></Newsletter>

        <CTAexploreSite> </CTAexploreSite>

    </React.Fragment>
  )
}

export default TakeNotesPage