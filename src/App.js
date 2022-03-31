import React from 'react';
import SyllabusPage from './components/SyllabusPage';
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import LandingPage from './components/LandingPage'
import Navbar from '../src/components/Navbar'
import Footer from './components/Footer';
import TakeNotesPage from './components/TakeNotesPage';
function App() {
  return (
    <><div className="App" style={{ backgroundColor: '#F7FBFD' }}>
      <Router>
        <Routes>
          <Route path='/syllabus' element={<SyllabusPage />}>  </Route>
          <Route path='/notes' element={<TakeNotesPage />}>  </Route>
        </Routes>
        <Routes>
          <Route path='/' element={<LandingPage />}></Route>
        </Routes>
      </Router>
    </div><Footer
        color={"#004766"}
        buttonText={"Sign me up!"}
        buttonColor={"#0E5E81"}
        buttonWidth={"135px"}
        buttonHeight={"40px"} /></> 
  );
}
export default App;