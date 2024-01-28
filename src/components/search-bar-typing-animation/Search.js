import React, { useEffect, useState, useRef } from "react";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [dynamicText, setDynamicText] = useState("");
  const [typingAnimationIndex, setTypingAnimationIndex] = useState(0);
  const [openModal, setModalOpen] = useState(false);

  const dynamicTexts = ["Laptops", "Desktops", "Mobiles", "Tablets"];
  useEffect(() => {
    const typingAnimation = setInterval(() => {
      setDynamicText(dynamicTexts[typingAnimationIndex]);
      setTypingAnimationIndex((prevIndex) => (prevIndex + 1) % dynamicTexts.length);
    }, 1580);

    return () => clearInterval(typingAnimation);
  }, [typingAnimationIndex, dynamicTexts]);

  // Use a ref to keep track of the input element
  const inputRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target) && !e.target.classList.contains("modal")) {
        setModalOpen(false);
      }
    };

    // Add the click event listener to the document
    document.addEventListener("click", handleOutsideClick);

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder={`Search For ${dynamicText}`}
        onClick={() => setModalOpen(true)}
        value={searchText}
        className="ease-in p-6 border-4 border-red-950 w-full h-5"
        onChange={(e) => setSearchText(e.target.value)}
        ref={inputRef}
      />

      <div className={`w-full h-40 bg-slate-200 drop-shadow-2xl mt-3 ${openModal ? "block" : "hidden"} modal`}></div>
    </div>
  );
};

export default Search;
