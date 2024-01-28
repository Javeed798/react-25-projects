import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ImageSlider = ({ url, limit }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const fetchImages = async (getUrl) => {
    setLoading(true);
    try {
      const response = await fetch(`${getUrl}?page=1&limit=${limit}`);
      const data = await response.json();
      setImages(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setErrorMsg(errorMsg)
      setLoading(false);
    }
  };
  console.log(images);


  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  const handleNextClick = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  const handlePreviousClick = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  console.log(currentSlide);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     handleNextClick();
  //   }, 2000);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  if (loading) {
    return <div>Loading.... PLease Waitt.</div>;
  }


  return (
    <div>
      <div className="flex">
        <p>
          <FaArrowLeft onClick={handlePreviousClick} size={40} />
        </p>
        {images.map((item, index) => (
          <img
            key={index}
            className={`w-[300px] h-[300px] ${
              currentSlide === index ? "block" : "hidden"
            }`}
            src={item.download_url}
            alt=""
          />
        ))}
        <p>
          <FaArrowRight onClick={handleNextClick} size={40} />
        </p>
      </div>
      {images.map((item, index) => (
        <button
          onClick={() => setCurrentSlide(index)}
          className={`w-4 h-4 mr-2 bg-black rounded-full ${
            currentSlide === index ? "bg-red-500" : "bg-black"
          }`}
        ></button>
      ))}
    </div>
  );
};

export default ImageSlider;
