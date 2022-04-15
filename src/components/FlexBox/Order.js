import { useState } from "react";
import NextSlide from "../NextSlide";

const initialItems = {
  item1: {
    order: 0,
  },
  item2: {
    order: 0,
  },
  item3: {
    order: 0,
  },
  item4: {
    order: 0,
  },
};

const Order = () => {
  const [items, setItems] = useState(initialItems);

  return (
    <div id="order" className="w-screen h-screen center flex-col relative">
      <h1 className="text-6xl font-bold text-blue-900 p-16">Flex Order<span className="text-2xl text-purple-500">(Flex Item)</span></h1>
      <div className="text-3xl text-gray-600 font-bold bg-blue-100 shadow px-6 py-4 rounded">
        order : <span className="text-blue-800 font-semibold">0 ;</span>
      </div>
      <section className="flex-1 center">
        {/* section */}
        <div
          className={`flex gap-10  px-10 py-6 bg-indigo-200  rounded flex-wrap`}
          style={{}}
        >
          {/* item 1 */}
          <div
            className={`bg-blue-${4}00 text-blue-100  text-2xl  w-60 rounded p-4 transition shadow shadow-inner`}
            style={{ order: `${items.item1.order}` }}
          >
            Flex Item {1}
            <br />
            <div className="p-2 mt-3 flex font-semibold">
              <span>order: </span>
              <input
                className=" w-16 font-semibold text-center ml-2 bg-transparent shadow-inner focus:outline-none rounded"
                onChange={(e) => {
                  setItems({ ...items, item1: { order: e.target.value } });
                }}
                value={items.item1.order}
                type="number"
              />
            </div>
          </div>
          {/* item 2 */}
          <div
            className={`bg-blue-${5}00 text-blue-100  text-2xl  w-60 rounded p-4 transition shadow shadow-inner`}
            style={{ order: `${items.item2.order}` }}
          >
            Flex Item {2}
            <br />
            <div className="p-2 mt-3 flex font-semibold">
              <span>order: </span>
              <input
                className=" w-16 font-semibold text-center ml-2 bg-transparent shadow-inner focus:outline-none rounded"
                onChange={(e) => {
                  setItems({ ...items, item2: { order: e.target.value } });
                }}
                value={items.item2.order}
                type="number"
              />
            </div>
          </div>
          {/* item 3 */}
          <div
            className={`bg-blue-${6}00 text-blue-100  text-2xl  w-60 rounded p-4 transition shadow shadow-inner`}
            style={{ order: `${items.item3.order}` }}
          >
            Flex Item {3}
            <br />
            <div className="p-2 mt-3 flex font-semibold">
              <span>order: </span>
              <input
                className=" w-16 font-semibold text-center ml-2 bg-transparent shadow-inner focus:outline-none rounded"
                onChange={(e) => {
                  console.log(e.target.value);
                  setItems({ ...items, item3: { order: e.target.value } });
                }}
                value={items.item3.order}
                type="number"
              />
            </div>
          </div>
          {/* item 4 */}
          <div
            className={`bg-blue-${4}00 text-blue-100  text-2xl  w-60 rounded p-4 transition shadow shadow-inner`}
            style={{ order: `${items.item4.order}` }}
          >
            Flex Item {4}
            <br />
            <div className="p-2 mt-3 flex font-semibold">
              <span>order: </span>
              <input
                className=" w-16 font-semibold text-center ml-2 bg-transparent shadow-inner focus:outline-none rounded"
                onChange={(e) => {
                  console.log(e.target.value);
                  setItems({ ...items, item4: { order: e.target.value } });
                }}
                value={items.item4.order}
                type="number"
              />
            </div>
          </div>
        </div>
        {/* end section */}
      </section>
      <NextSlide href="#grow" />
    </div>
  );
};

export default Order;
