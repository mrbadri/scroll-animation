import { useState } from "react";
import NextSlide from "../NextSlide";

const AlignSelf = () => {
  const [classFlexItem, setClassFlexItem] = useState("flex-row");

  return (
    <div id="align_item" className="w-screen h-screen center flex-col relative">
      <h1 className="text-6xl font-bold text-blue-900 p-16">
        Flex Align Self
        <span className="text-2xl text-purple-500">(Flex Item)</span>
      </h1>
      <div className="text-3xl text-gray-600 font-bold bg-blue-100 shadow px-6 py-4 rounded">
        align-Self :{" "}
        <span className="text-blue-800 font-semibold">
          <span
            className="px-2 hover:text-blue-400 transition cursor-pointer"
            onClick={() => setClassFlexItem("self-stretch")}
          >
            stretch,
          </span>
          <span
            className="px-2 hover:text-blue-400 transition cursor-pointer"
            onClick={() => setClassFlexItem("self-start")}
          >
            flex-start,
          </span>
          <span
            className="px-2 hover:text-blue-400 transition cursor-pointer"
            onClick={() => setClassFlexItem("self-end")}
          >
            flex-end,
          </span>
          <span
            className="px-2 hover:text-blue-400 transition cursor-pointer"
            onClick={() => setClassFlexItem("self-center")}
          >
            center,
          </span>
          <span
            className="px-2 hover:text-blue-400 transition cursor-pointer"
            onClick={() => setClassFlexItem("self-baseline")}
          >
            baseline,
          </span>
          ;
        </span>
      </div>
      <section className="flex-1 center">
        {/* section */}
        <div
          className={`flex gap-5 items-center bg-indigo-200 px-6 rounded`}
          style={{ height: "400px" }}
        >
          <div
            className={`bg-blue-${3}00 text-blue-100 text-2xl w-40 rounded p-4 transition  shadow-inner`}
          >
            Flex Item {1}
          </div>
          <div
            className={`bg-red-${4}00  ${classFlexItem} text-red-100 pt-10 text-2xl  w-40 rounded p-4 transition  shadow-inner`}
          >
            Flex Item {3}
          </div>
          <div
            className={`bg-blue-${5}00 text-blue-100 text-2xl  w-40 rounded p-4 transition  shadow-inner`}
          >
            Flex Item {3}
          </div>
        </div>
        {/* end section */}
      </section>
      <NextSlide href="#align_content" />
    </div>
  );
};

export default AlignSelf;
