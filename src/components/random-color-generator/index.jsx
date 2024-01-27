import React, { useState } from "react";

const RandomColorGenerator = () => {
  const [type, setType] = useState("hex");
  const [color, setColor] = useState("#000000");

  const generateRandomUtility = (length) => {
    let someColor = Math.floor(Math.random() * length);
    return someColor;
  };

  const generateHexColor = () => {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[generateRandomUtility(hex.length)];
    }
    setColor(hexColor);
  };

  console.log(color);

  const generateRgbColor = () => {
    const r = generateRandomUtility(256);
    const g = generateRandomUtility(256);
    const b = generateRandomUtility(256);

    setColor(`rgb(${r}, ${g}, ${b})`);
  };
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: color,
      }}
      className="flex flex-col gap-12 bg-blue-400 p-5 rounded-md mt-4"
    >
      <div className="flex justify-between">
        <button
          onClick={() => setType("rgb")}
          className="bg-red-500 ml-56 w-fit h-12 p-2 rounded-md text-black uppercase font-semibold"
        >
          Generate RGB Color
        </button>
        <button
          onClick={() => setType("hex")}
          className="bg-yellow-500 p-2 w-fit h-12 rounded-md text-black uppercase font-semibold"
        >
          Generate HEX Color
        </button>
        <button
          onClick={type === "hex" ? generateHexColor : generateRgbColor}
          className="bg-green-500 p-2 w-fit h-12 rounded-md text-black uppercase font-semibold"
        >
          Generate Random Color
        </button>
      </div>

      <div className="flex items-center mx-auto my-auto justify-center w-[20%] h-[20%] bg-black">
        <h1 className="text-white text-4xl">{color}</h1>
      </div>
    </div>
  );
};

export default RandomColorGenerator;
