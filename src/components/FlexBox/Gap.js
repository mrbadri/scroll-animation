import { useState } from "react";
import NextSlide from "../NextSlide";

const Gap = () => {
  const [gap, setGap] = useState({ row: 0, column: 0 });

  return (
    <div id="gap" className="w-screen h-screen center flex-col relative">
      <h1 className="text-6xl font-bold text-blue-900 p-16">Flex Gap</h1>
      <div className="text-3xl text-gray-600 font-bold bg-blue-100 shadow px-6 py-4 rounded">
        gap :{" "}
        <span className="text-blue-800 font-semibold">
          <input
            className="bg-transparent w-40 text-center focus:outline-none"
            placeholder="row-gap"
            onBlur={(e) => {
              console.log(e.target.value);
              setGap({ ...gap, row: e.target.value });
            }}
          />
          <input
            className="bg-transparent w-40 text-center mr-4 focus:outline-none"
            placeholder="column-gap"
            onBlur={(e) => {
              console.log(e.target.value);
              setGap({ ...gap, column: e.target.value });
            }}
          />
          ;
        </span>
      </div>
      <section className="flex-1 center">
        {/* section */}
        <div
          className={`flex gap-5  bg-indigo-200  rounded flex-wrap`}
          style={{
            height: "400px",
            width: " 400px",
            gap: `${gap.row} ${gap.column}`,
          }}
        >
          <div
            className={`bg-blue-${3}00 text-blue-100  text-2xl  w-40 rounded p-4 transition shadow shadow-inner`}
          >
            Flex Item {1}
          </div>
          <div
            className={`bg-blue-${4}00 text-blue-100 text-2xl  w-40 rounded p-4 transition shadow shadow-inner`}
          >
            Flex Item {2}
          </div>
          <div
            className={`bg-blue-${5}00 text-blue-100 text-2xl  w-40 rounded p-4 transition shadow shadow-inner`}
          >
            Flex Item {3}
          </div>
          <div
            className={`bg-blue-${6}00 text-blue-100 text-2xl  w-40 rounded p-4 transition shadow shadow-inner`}
          >
            Flex Item {4}
          </div>
          <div
            className={`bg-blue-${7}00 text-blue-100 text-2xl  w-40 rounded p-4 transition shadow shadow-inner`}
          >
            Flex Item {5}
          </div>
          <div
            className={`bg-blue-${8}00 text-blue-100 text-2xl  w-40 rounded p-4 transition shadow shadow-inner`}
          >
            Flex Item {6}
          </div>
        </div>
        {/* end section */}
      </section>
      <NextSlide href="#" />
    </div>
  );
};

export default Gap;
