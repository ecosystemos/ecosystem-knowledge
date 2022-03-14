import React from 'react';
import SyllabusPage from './components/SyllabusPage';
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import LandingPage from './components/LandingPage'
import Navbar from '../src/components/Navbar'
import Footer from './components/Footer';


function App() {
  return (
  
      <div className="App">
          <Router>
      <Routes>
                       
                        
                          <Route path='/syllabus' element={<SyllabusPage/>} >  </Route>
                      
                    


                          </Routes>
      <Routes>

             <Route path='/' element={<LandingPage/>} ></Route>

      </Routes>


      </Router>
      </div>




  );
}



export default App;
 