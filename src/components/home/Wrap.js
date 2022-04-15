import { useState } from "react";
import NextSlide from "../NextSlide";

const Wrap = () => {
  const [classFlexContainer, setClassFlexContainer] = useState("flex-row");

  return (
    <div id="wrap" className="w-screen h-screen center flex-col relative">
      <h1 className="text-6xl font-bold text-blue-900 p-16">Flex Wrap</h1>
      <div className="text-4xl text-gray-600 font-bold bg-blue-100 shadow px-6 py-4 rounded">
        flex-wrap :{" "}
        <span className="text-blue-800 font-semibold">
          <span
            className="px-2 hover:text-blue-400 transition cursor-pointer"
            onClick={() => setClassFlexContainer(" flex-nowrap")}
          >
            no-wrap,
          </span>
          <span
            className="px-2 hover:text-blue-400 transition cursor-pointer"
            onClick={() => setClassFlexContainer("flex-wrap")}
          >
            wrap,
          </span>
          <span
            className="px-2 hover:text-blue-400 transition cursor-pointer"
            onClick={() => setClassFlexContainer(" flex-wrap-reverse")}
          >
            wrap-reverse,
          </span>
        </span>
      </div>
      <section className="flex-1 center">
        {/* section */}
        <div
          className={`flex gap-5 ${classFlexContainer} bg-indigo-200 p-8 rounded`}
          style={{ width: "500px" }}
        >
          {[1, 2, 3, 4, 5, 6, 7].map((item) => (
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
      <NextSlide href="#flow" />
    </div>
  );
};

export default Wrap;
