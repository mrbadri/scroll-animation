import { useState } from "react";
import NextSlide from "../NextSlide";

const Direction = () => {
  const [classFlexContainer, setClassFlexContainer] = useState("flex-row");

  return (
    <div id="direction" className="w-screen h-screen center flex-col relative">
      <h1 className="text-6xl font-bold text-blue-900 p-16">Flex Direction</h1>
      <div className="text-4xl text-gray-600 font-bold bg-blue-100 shadow px-6 py-4 rounded">
        flex-direction :{" "}
        <span className="text-blue-800 font-semibold">
          <span
            className="px-2 hover:text-blue-400 transition cursor-pointer"
            onClick={() => setClassFlexContainer("flex-row")}
          >
            row,
          </span>
          <span
            className="px-2 hover:text-blue-400 transition cursor-pointer"
            onClick={() => setClassFlexContainer("flex-row-reverse")}
          >
            row-reverse,
          </span>
          <span
            className="px-2 hover:text-blue-400 transition cursor-pointer"
            onClick={() => setClassFlexContainer("flex-col")}
          >
            column,
          </span>
          <span
            className="px-2 hover:text-blue-400 transition cursor-pointer"
            onClick={() => setClassFlexContainer("flex-col-reverse")}
          >
            column-reverse
          </span>
          ;
        </span>
      </div>
      <section className="flex-1 center">
        {/* section */}
        <div
          className={`flex gap-5 ${classFlexContainer} bg-indigo-200 p-8 rounded`}
        >
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              className={`bg-blue-${
                item + 2
              }00 text-blue-100 text-2xl h-40 w-40 rounded p-4 transition shadow shadow-inner`}
            >
              Flex Item {item}
            </div>
          ))}
        </div>
        {/* end section */}
      </section>
      <NextSlide href="#wrap" />
    </div>
  );
};

export default Direction;
