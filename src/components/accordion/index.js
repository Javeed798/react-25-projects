import React, { useState } from "react";
import data from "./data";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  console.log(enableMultiSelection);

  const handleSelected = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  // function handleMultiSelection1(getCurrentId) {
  //   let cpyMutiple = [...multiple];
  //   const findIndexOfCurrentId = cpyMutiple.indexOf(getCurrentId);

  //   console.log(findIndexOfCurrentId);
  //   if (findIndexOfCurrentId === -1) cpyMutiple.push(getCurrentId);
  //   else cpyMutiple.splice(findIndexOfCurrentId, 1);

  //   setMultiple(cpyMutiple);
  // }

  const handleMultiSelection1 = (getCurrentId) => {
    const copyArray = [...multiple];
    const getCurrentIndex = copyArray.indexOf(getCurrentId);
    if (getCurrentIndex === -1) {
      copyArray.push(getCurrentId);
    } else {
      copyArray.splice(getCurrentIndex,1)
    }
    setMultiple(copyArray);
  }

  return (
    <div className="flex flex-col w-[30%] rounded-lg justify-center drop-shadow-lg bg-slate-900 text-white p-5 mt-12">
      <h1 className="font-bold mx-auto text-4xl flex items-center justify-center">
        Accordion
      </h1>
      <button
        onClick={() => setEnableMultiSelection(!enableMultiSelection)}
        className="p-2 w-fit mt-6 mx-auto mb-5 bg-yellow-500 rounded-lg text-black"
      >
        Enable Multi Selection
      </button>
      {data &&
        data.length > 0 &&
        data.map((item, index) => (
          <div className="flex flex-col">
            <div
              className="flex justify-between mb-6 bg-emerald-700 rounded-md text-white font-bold p-4 mt-3"
              onClick={
                enableMultiSelection
                  ? () => handleMultiSelection1(item.id)
                  : () => handleSelected(item.id)
              }
              key={item.id}
            >
              <h2 className="ml-2">{item.question}</h2>
              <span>
                {selected === item.id ? <span>-</span> : <span>+</span>}
              </span>
            </div>

            {enableMultiSelection
              ? multiple.indexOf(item.id) !== -1 && (
                  <div className="p-4">{item.answer}</div>
                )
              : selected === item.id && (
                  <div className="p-4">{item.answer}</div>
                )}

            {/* {selected === item.id ||
              (multiple.indexOf(item.id) !== -1 && (
                <div className="p-4">{item.answer}</div>
              ))} */}
          </div>
        ))}
    </div>
  );
};

export default Accordion;
