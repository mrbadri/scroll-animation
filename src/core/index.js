import React, { useEffect, useRef, useState } from "react";
import ActivitySign from "../components/activitySign";
import Container from "../components/container";
import Item from "../components/item";
import HandleActivitySign from "./HandleActivitySign";
import "./index.scss";

const Navimation = ({ items, type, ...params }) => {
  const activitySign = React.createRef();
  const [activeItem, setActiveItem] = useState("");
  const [position, setPosition] = useState("0px");

  function onClickItem(e) {
    setActiveItem(e.currentTarget.id);

    setPosition(
      Math.floor(
        e.currentTarget.offsetLeft -
          (document.getElementById("activity_sign").offsetWidth -
            e.currentTarget.offsetWidth) /
            2
      ) + "px"
    );
  }

  useEffect(() => {
    items.map((item) => {
      item.active && setActiveItem(item.id);
    });

    setTimeout(() => {
      setPosition(
        Math.floor(
          document.getElementsByClassName("active")[0].offsetLeft -
            (document.getElementById("activity_sign").offsetWidth -
              document.getElementsByClassName("active")[0].offsetWidth) /
              2
        ) + "px"
      );
    }, 10);
  }, []);

  return (
    <Container {...params}>
      <HandleActivitySign type={type} position={position} />
      {items.map((item) => {
        return (
          <Item
            key={item.id}
            onClick={onClickItem}
            className={item.id === activeItem ? "active" : ""}
            id={item.id}
          >
            {item.icon}
          </Item>
        );
      })}
    </Container>
  );
};

export default Navimation;
