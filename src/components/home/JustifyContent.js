import { useState } from "react";
import NextSlide from "../NextSlide";

const JustifyContent = () => {
  const [classFlexContainer, setClassFlexContainer] = useState("flex-row");

  return (
    <div
      id="justify_content"
      className="w-screen h-screen center flex-col relative"
    >
      <h1 className="text-6xl font-bold text-blue-900 p-16">
        Flex Justify Content
      </h1>
      <div className="text-3xl text-gray-600 font-bold bg-blue-100 shadow px-6 py-4 rounded">
        justify-content :{" "}
        <span className="text-blue-800 font-semibold">
          <span
            className="px-2 hover:text-blue-400 transition cursor-pointer"
            onClick={() => setClassFlexContainer("justify-start")}
          >
            flex-start,
          </span>
          <span
            className="px-2 hover:text-blue-400 transition cursor-pointer"
            onClick={() => setClassFlexContainer("justify-end")}
          >
            flex-end,
          </span>
          <span
            className="px-2 hover:text-blue-400 transition cursor-pointer"
            onClick={() => setClassFlexContainer("justify-center")}
          >
            center,
          </span>
          <span
            className="px-2 hover:text-blue-400 transition cursor-pointer"
            onClick={() => setClassFlexContainer("justify-between")}
          >
            space-between,
          </span>
          <span
            className="px-2 hover:text-blue-400 transition cursor-pointer"
            onClick={() => setClassFlexContainer("justify-around")}
          >
            space-around,
          </span>
          <span
            className="px-2 hover:text-blue-400 transition cursor-pointer"
            onClick={() => setClassFlexContainer("justify-evenly")}
          >
            space-evenly
          </span>
          ;
        </span>
      </div>
      <section className="flex-1 center">
        {/* section */}
        <div
          className={`flex gap-5 ${classFlexContainer} bg-indigo-200 py-6 rounded`}
          style={{ width: "600px" }}
        >
          {[1, 2, 3].map((item) => (
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
      <NextSlide href="#align-item" />
    </div>
  );
};

export default JustifyContent;
