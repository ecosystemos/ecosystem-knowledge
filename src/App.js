import './App.css';
import Navbar from '../src/components/Navbar'
import Footer from './components/Footer';
import SyllabusPage from './components/SyllabusPage';
import SliderWithReviewCard from './components/SliderWithReviewCard';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <SyllabusPage></SyllabusPage>
      <Footer />
    </div>
  );
}

export default App;
