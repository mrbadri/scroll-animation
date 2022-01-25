import Multiple from "./Multiple";

const DisplayC = () => {
  return (
    <div style={{ backgroundColor: "red", color: "#fff", padding: 15, margin: 20 }}>
      C - counter value is:
      <br/>
      <Multiple value={2} />
    </div>
  );
};

export default DisplayC;
