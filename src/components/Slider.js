import { useState } from "react";
import "./Slider.scss";

// initial data
const initialItems = {
  item1: {
    content: "item 1",
    isActive: true,
  },
  item2: {
    content: "item 2",
    isActive: false,
  },
  item3: {
    content: "item 3",
    isActive: false,
  },
  item4: {
    content: "item 4",
    isActive: false,
  },
};

export default function Slider() {
  const [items, setItems] = useState(initialItems);

  function onClick(e) {
    let newItems = { ...items };
    const id = e.target.id;

    for (const key in items) {
      newItems[key].isActive = (key === id);
      setItems(newItems);
    }
  }

  return (
    <div className="slider">
      {Object.keys(items).map((key) => (
        <div
          className={`item ${items[key].isActive ? "active" : ""}`}
          onClick={onClick}
          id={key}
        >
          {items[key].content}
        </div>
      ))}
    </div>
  );
}
