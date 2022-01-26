import React from "react";

const Columns = () => (
  <React.Fragment>
    <th>Column1</th>
    <th>Column2</th>
    <th>Column3</th>
    <th>Column4</th>
  </React.Fragment>
);

// Description 
// we can use <></> or <React.Fragment></React.Fragment>
// if we want send props must use Fragment

function App() {
  return (
    <div className="App flex justify-center items-center h-screen overflow-x-hidden overflow-y-auto">
      <div>
        <table>
          <thead>
            <tr>
              <Columns />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Row 1</td>
              <td>Row 2</td>
              <td>Row 3</td>
              <td>Row 4</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
