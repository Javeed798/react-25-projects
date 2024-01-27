import logo from './logo.svg';
import './App.css';
import Accordion from './components/accordion';
import RandomColorGenerator from './components/random-color-generator';
import StarRating from './components/star-rating/StarRating';

function App() {
  return (
    <div className="flex flex-col mx-auto items-center justify-center">
      {/* <Accordion /> */}
      {/* <RandomColorGenerator /> */}

      <StarRating noOfStars={50} />
      
    </div>
  );
}

export default App;
