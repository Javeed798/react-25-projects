import logo from './logo.svg';
import './App.css';
import Accordion from './components/accordion';
import RandomColorGenerator from './components/random-color-generator';
import StarRating from './components/star-rating/StarRating';
import ImageSlider from './components/image-slider/ImageSlider';
import Search from './components/search-bar-typing-animation/Search';

function App() {
  return (
    <div className="flex flex-col mx-auto items-center justify-center">
      {/* <Accordion /> */}
      {/* <RandomColorGenerator /> */}

      {/* <StarRating noOfStars={50} /> */}

      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        limit={"10"}
      /> */}

      <Search />
    </div>
  );
}

export default App;
