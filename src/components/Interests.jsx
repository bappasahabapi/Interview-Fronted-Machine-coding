export const Interests = ({ data, setData,errors }) => {
  const { interests } = data;
  // console.log(interests);

  const handleChange = (e) => {
    const isChecked = e.target.checked;
    const interestName = e.target.name;

    setData((prevData) => ({
      ...prevData,
      interests: isChecked
        ? [...prevData.interests, interestName] // Add interest
        : prevData.interests.filter((i) => i !== interestName), //  Remove interest
    }));
  };

  return (
    <>
      <h1>Interest</h1>
      <div>
        <div>
          <label>
            <input
              type="checkbox"
              name="coding"
              checked={interests.includes("coding")}
              onChange={handleChange}
            />{" "}
            Coding
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="music"
              checked={interests.includes("music")}
               onChange={handleChange}
            //   onChange={(e) => handleChange(e, "music")}
            />{" "}
            Music
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="cricket"
              checked={interests.includes("cricket")}
            //   onChange={(e) => handleChange(e, "cricket")}
             onChange={handleChange}
            />{" "}
            Cricket
          </label>
        </div>
        {errors.interests && (<span className="error">{errors.interests}</span>)}
      </div>
    </>
  );
};
