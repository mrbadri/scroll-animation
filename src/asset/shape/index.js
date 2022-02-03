import { ReactComponent as Curve } from "./source/Curve.svg";

const ListShapes = {
  curve: Curve,
};

const Shape = ({ name, ...params }) => {
  const Shape = ListShapes[name];
  return <Shape name={name} {...params} />;
};

export default Shape;
