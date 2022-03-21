import React from 'react'
import AddNewNote from './AddNewNote'
import Navbar from './Navbar'
import Search from './Search'
import SelectOptionSortBy from './SelectOptionSortBy'

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
    <AddNewNote> </AddNewNote>
    <SelectOptionSortBy></SelectOptionSortBy>
    <Search></Search>
    </React.Fragment>
  )
}

export default TakeNotesPage