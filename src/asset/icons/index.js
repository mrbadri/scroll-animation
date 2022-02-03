import "./index.scss";
// components
import { ReactComponent as A } from "./source/A.svg";
import { ReactComponent as B } from "./source/B.svg";
import { ReactComponent as C } from "./source/C.svg";
import { ReactComponent as D } from "./source/D.svg";

const ListIcons = {
  A: A,
  B: B,
  C: C,
  D: D,
};

const Icon = ({ name, ...params }) => {
  const Icon = ListIcons[name];
  return <Icon name={name} {...params} />;
};

export default Icon;
