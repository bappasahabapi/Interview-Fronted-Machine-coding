import React from "react";

const TabTwo = ({ data, setData }) => {
  const { gender, theme } = data;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <b>TabTwo: Info Page</b>
      <hr style={{ width: "10%", marginLeft: 0 }} />

      {/* Gender Selection */}
      <div>
        <h5>Gender</h5>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={gender === "male"}
              onChange={handleChange}
            />{" "}
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={gender === "female"}
              onChange={handleChange}
            />{" "}
            Female
          </label>
        </div>
      </div>

      {/* Theme Selection */}
      <div style={{ marginTop: "1rem" }}>
        <p>Settings</p>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <label>
            <input
              type="radio"
              name="theme"
              value="dark"
              checked={theme === "dark"}
              onChange={handleChange}
            />{" "}
            Dark
          </label>
          <label>
            <input
              type="radio"
              name="theme"
              value="light"
              checked={theme === "light"}
              onChange={handleChange}
            />{" "}
            Light
          </label>
        </div>
      </div>
    </div>
  );
};

export default TabTwo;
