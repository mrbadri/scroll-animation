import { useState } from "react";
import NextSlide from "../NextSlide";

const initialItems = {
  item1: {
    grow: 0,
  },
  item2: {
    grow: 0,
  },
  item3: {
    grow: 0,
  },
  item4: {
    grow: 0,
  },
};

const Grow = () => {
  const [items, setItems] = useState(initialItems);

  return (
    <div id="grow" className="w-screen h-screen center flex-col relative">
      <h1 className="text-6xl font-bold text-blue-900 p-16">
        Flex Grow<span className="text-2xl text-purple-500">(Flex Item)</span>
      </h1>
      <div className="text-3xl text-gray-600 font-bold bg-blue-100 shadow px-6 py-4 rounded">
        flex-grow : <span className="text-blue-800 font-semibold">0 ;</span>
      </div>
      <section className="flex-1 center">
        {/* section */}
        <div
          className={`flex gap-1  px-10 py-6 bg-indigo-200  rounded flex-wrap`}
          style={{ width: "700px" }}
        >
          {/* item 1 */}
          <div
            className={`bg-blue-${4}00 text-blue-100   text-2xl  w-44 rounded p-4 transition shadow shadow-inner`}
            style={{ "flex-grow": `${items.item1.grow}` }}
          >
            Flex Item {1}
            <br />
            <div className="p-2 mt-3 flex font-semibold">
              <span>grow: </span>
              <input
                className=" w-16 font-semibold text-center ml-2 bg-transparent shadow-inner focus:outline-none rounded"
                onChange={(e) => {
                  console.log(e.target.value);
                  setItems({ ...items, item1: { grow: e.target.value } });
                }}
                value={items.item1.grow}
                type="number"
              />
            </div>
          </div>
          {/* item 2 */}
          <div
            className={`bg-blue-${5}00 text-blue-100   text-2xl  w-44 rounded p-4 transition shadow shadow-inner`}
            style={{ "flex-grow": `${items.item2.grow}` }}
          >
            Flex Item {2}
            <br />
            <div className="p-2 mt-3 flex font-semibold">
              <span>grow: </span>
              <input
                className=" w-16 font-semibold text-center ml-2 bg-transparent shadow-inner focus:outline-none rounded"
                onChange={(e) => {
                  console.log(e.target.value);
                  setItems({ ...items, item2: { grow: e.target.value } });
                }}
                value={items.item2.grow}
                type="number"
              />
            </div>
          </div>
          {/* item 3 */}
          <div
            className={`bg-blue-${6}00 text-blue-100   text-2xl  w-44 rounded p-4 transition shadow shadow-inner`}
            style={{ "flex-grow": `${items.item3.grow}` }}
          >
            Flex Item {3}
            <br />
            <div className="p-2 mt-3 flex font-semibold">
              <span>grow: </span>
              <input
                className=" w-16 font-semibold text-center ml-2 bg-transparent shadow-inner focus:outline-none rounded"
                onChange={(e) => {
                  console.log(e.target.value);
                  setItems({ ...items, item3: { grow: e.target.value } });
                }}
                value={items.item3.grow}
                type="number"
              />
            </div>
          </div>
          {/* item 4 */}
          <div
            className={`bg-blue-${4}00 text-blue-100   text-2xl  w-44 rounded p-4 transition shadow shadow-inner`}
            style={{ "flex-grow": `${items.item4.grow}` }}
          >
            Flex Item {4}
            <br />
            <div className="p-2 mt-3 flex font-semibold">
              <span>grow: </span>
              <input
                className=" w-16 font-semibold text-center ml-2 bg-transparent shadow-inner focus:outline-none rounded"
                onChange={(e) => {
                  console.log(e.target.value);
                  setItems({ ...items, item4: { grow: e.target.value } });
                }}
                value={items.item4.grow}
                type="number"
              />
            </div>
          </div>
        </div>
        {/* end section */}
      </section>
      <NextSlide href="#" />
    </div>
  );
};

export default Grow;
