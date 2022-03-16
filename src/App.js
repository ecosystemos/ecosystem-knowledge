import Navbar from '../src/components/Navbar'
import Footer from './components/Footer';
import SyllabusPage from './components/SyllabusPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage'


function App() {
  return (
    <Router>
      <div className="App" style={{backgroundColor: '#F7FBFD'}}>
      <Switch>
        <Route path='/syllabus'>
          <Navbar
            navbarColor={"#0E5E81"}
            firstTab={"Syllabus"}
            secondTab= {"Q & A"}
            thirdTab= {"Notes"}
            fourthTab={"Take Action"}
          />
          <SyllabusPage />
          <Footer 
            color={"#004766"}
            buttonText={"Sign me up!"}
            buttonColor={"#0E5E81"}
            buttonWidth={"135px"}
            buttonHeight={"40px"}          
          /> 
        </Route>
      </Switch>
      <Switch>
        <Route path='/landing'>
          <LandingPage />
        </Route>
      </Switch>
      </div>
    </Router>
  );
}



export default App;
 