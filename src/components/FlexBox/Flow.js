import { useState } from "react";
import NextSlide from "../NextSlide";

const Flow = () => {
  const [classFlexContainer, setClassFlexContainer] = useState("flex-row");

  return (
    <div id="flow" className="w-screen h-screen center flex-col relative">
      <h1 className="text-6xl font-bold text-blue-900 p-16">Flex Flow</h1>
      <div className="text-4xl text-gray-600 font-bold bg-blue-100 shadow px-6 py-4 rounded">
        flex-flow :{" "}
        <span className="text-blue-800 font-semibold">
          <span
            className="px-2 hover:text-blue-400 transition cursor-pointer"
            onClick={() => setClassFlexContainer(" flex-nowrap")}
          >
            row
          </span>
          <span
            className="px-2 hover:text-blue-400 transition cursor-pointer"
            onClick={() => setClassFlexContainer("flex-wrap")}
          >
            nowrap
          </span>
          ;
        </span>
      </div>
      <section className="flex-1 center">
        <div className="text-6xl text-gray-500 border shadow-inner py-10 px-14 rounded bg-gray-50 font-semibold">
          flex-flow: flex-direction flex-wrap ;
        </div>
      </section>
      <NextSlide href="#justify_content" />
    </div>
  );
};

export default Flow;
