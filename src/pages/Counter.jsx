import { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);

  const handleAdd = () => {
    setValue((pre) => pre + 1);
  };
  const handleMinus = () => {
    setValue((pre) => pre + 1);
  };
  const handleReset = () => {
    setValue(0);
  };

  return (
    <div>
      <u><b>Problem:1 Make a Counter</b></u> 
      
      <li>user can incerement</li>
      <li>user can decrement</li>
      <li>user can reset</li>
      
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Value: {value}</h2>
      </div>
      <div style={{ display: "flex", flexDirection: "row", gap: "20px" , justifyContent:'center' }}>
        <button onClick={handleAdd}>Add</button>{" "}
        <button onClick={handleMinus}>Minus</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
