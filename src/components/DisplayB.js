import { DisplayC } from ".";

const DisplayB = ({ counter }) => {
  return (
    <div style={{ backgroundColor: "#aaa", padding: 15, margin: 20 }}>
      B - counter value is: {counter}
      <br />
      <br />
      <br />
      <DisplayC counter={counter} />
    </div>
  );
};

export default DisplayB;
