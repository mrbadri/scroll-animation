import Multiple from "./Multiple";

const DisplayC = ({ counter }) => {
  return (
    <div
      style={{ backgroundColor: "red", color: "#fff", padding: 15, margin: 20 }}
    >
      C - counter value is: {counter}
      <br />
      <Multiple value={2} />
    </div>
  );
};

export default DisplayC;
