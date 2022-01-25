const DisplayA = ({ counter }) => {
  return (
    <div
      style={{ backgroundColor: "#ccc", padding: 15, margin: 20 }}
      className="text-blue-400"
    >
      A - counter value is: {counter}
    </div>
  );
};

export default DisplayA;
