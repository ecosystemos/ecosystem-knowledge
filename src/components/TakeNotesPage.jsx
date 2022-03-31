import React from 'react'
import AddNewNote from './AddNewNote'
import Navbar from './Navbar'
import {Text} from "@chakra-ui/react"
import Note from './Note'
import SortAndSearch from './SortAndSearch'
import styled from "styled-components"

const TakeNotesWrapper = styled.section `

margin-left: 30%;
margin-top: 3%;
margin-bottom: 3%;


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

    <TakeNotesWrapper>
            <Text fontSize='32px'  color={"#82C6E3"}  style={{textAlign:"left", marginBottom:"16px"}}>Notes</Text>
            <Text fontSize='20px'  color="#222C2F"  style={{textAlign:"left", marginBottom:"8px"}}>Building your Startup Ecosystem</Text>
            <Text fontSize='16px'  color="#5A6D72"  style={{textAlign:"left", marginBottom:"32px"}}>Put what you learned into practice! Create and manage your tasks</Text>
            
    <AddNewNote> </AddNewNote>
    <SortAndSearch></SortAndSearch>
    <Note></Note>
    <Note></Note>
    <Note></Note>
    <Note></Note>
    <Note></Note>
    </TakeNotesWrapper>
    </React.Fragment>
  )
}

export default TakeNotesPage