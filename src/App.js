import Navbar from '../src/components/Navbar'
import CourseCard from './components/CourseCard';
import CourseCardSlider from './components/CourseCardSlider';
import Footer from './components/Footer';
import ReviewCardSlider from './components/ReviewCardSlider';
import SyllabusPage from './components/SyllabusPage';


function App() {
  return (
    <div className="App">
     
      <Navbar 
      navbarColor={"#0E5E81"}
      firstTab={"Syllabus"}
      secondTab= {"Q & A"}
      thirdTab= {"Notes"}
      fourthTab={"Take Action"}
      />

    

      <SyllabusPage></SyllabusPage>
    

      <Footer 
      color={"#004766"}
      buttonText={"Sign me up!"}
      buttonText={"Sign me up!"}
      buttonColor={"#0E5E81"}
      buttonWidth={"135px"}
      buttonHeight={"40px"}          
      />  
          
    </div>
  );
}

export default App;
 