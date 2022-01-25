import { DisplayC } from ".";

const DisplayB = () => {
  return (
    <div style={{ backgroundColor: "#aaa", padding: 15, margin: 20 }}>
      B - counter value is:
      <br />
      <br />
      <br />
      <DisplayC />
    </div>
  );
};

export default DisplayB;
