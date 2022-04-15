import { useState } from "react";
import NextSlide from "../NextSlide";

const initialItems = {
  item1: {
    basis: 1,
  },
  item2: {
    basis: 1,
  },
  item3: {
    basis: 1,
  },
  item4: {
    basis: 1,
  },
};

const Basis = () => {
  const [items, setItems] = useState(initialItems);

  return (
    <div id="basis" className="w-screen h-screen center flex-col relative">
      <h1 className="text-6xl font-bold text-blue-900 p-16">
        Flex basis<span className="text-2xl text-purple-500">(Flex Item)</span>
      </h1>
      <div className="text-3xl text-gray-600 font-bold bg-blue-100 shadow px-6 py-4 rounded">
        flex-basis : <span className="text-blue-800 font-semibold">1 ;</span>
      </div>
      <section className="flex-1 center">
        {/* section */}
        <div
          className={`flex gap-1  px-10 py-6 bg-indigo-200  rounded`}
        //   style={{ width: "300px" }}
        >
          {/* item 1 */}
          <div
            className={`bg-blue-${4}00 text-blue-100 text-2xl rounded p-4 transition shadow shadow-inner`}
            style={{ "flex-basis": `${items.item1.basis}` }}
          >
            Flex Item {1}
            <br />
            <div className="p-2 mt-3 flex font-semibold">
              <span>basis: </span>
              <input
                className=" w-16 font-semibold text-center ml-2 bg-transparent shadow-inner focus:outline-none rounded"
                onChange={(e) => {
                  console.log(e.target.value);
                  setItems({ ...items, item1: { basis: e.target.value } });
                }}
                value={items.item1.basis}
                type="text"
              />
            </div>
          </div>
          {/* item 2 */}
          <div
            className={`bg-blue-${5}00 text-blue-100 text-2xl rounded p-4 transition shadow shadow-inner`}
            style={{ "flex-basis": `${items.item2.basis}` }}
          >
            Flex Item {2}
            <br />
            <div className="p-2 mt-3 flex font-semibold">
              <span>basis: </span>
              <input
                className=" w-16 font-semibold text-center ml-2 bg-transparent shadow-inner focus:outline-none rounded"
                onChange={(e) => {
                  console.log(e.target.value);
                  setItems({ ...items, item2: { basis: e.target.value } });
                }}
                value={items.item2.basis}
                type="text"
              />
            </div>
          </div>
          {/* item 3 */}
          <div
            className={`bg-blue-${6}00 text-blue-100 text-2xl rounded p-4 transition shadow shadow-inner`}
            style={{ "flex-basis": `${items.item3.basis}` }}
          >
            Flex Item {3}
            <br />
            <div className="p-2 mt-3 flex font-semibold">
              <span>basis: </span>
              <input
                className=" w-16 font-semibold text-center ml-2 bg-transparent shadow-inner focus:outline-none rounded"
                onChange={(e) => {
                  console.log(e.target.value);
                  setItems({ ...items, item3: { basis: e.target.value } });
                }}
                value={items.item3.basis}
                type="text"
              />
            </div>
          </div>
          {/* item 4 */}
          <div
            className={`bg-blue-${4}00 text-blue-100 text-2xl rounded p-4 transition shadow shadow-inner`}
            style={{ "flex-basis": `${items.item4.basis}` }}
          >
            Flex Item {4}
            <br />
            <div className="p-2 mt-3 flex font-semibold">
              <span>basis: </span>
              <input
                className=" w-16 font-semibold text-center ml-2 bg-transparent shadow-inner focus:outline-none rounded"
                onChange={(e) => {
                  console.log(e.target.value);
                  setItems({ ...items, item4: { basis: e.target.value } });
                }}
                value={items.item4.basis}
                type="text"
              />
            </div>
          </div>
        </div>
        {/* end section */}
      </section>
      <NextSlide href="#align-self" />
    </div>
  );
};

export default Basis;
