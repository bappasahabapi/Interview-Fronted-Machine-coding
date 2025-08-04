import { CustomInput } from "./CustomInput";

export const Profile = ({ data, setData, errors }) => {
  const { name, age, email, address } = data;

  const handleChange = (e, name) => {
    setData((preState) => ({
      ...preState,
      [name]: e.target.value,
    }));
  };
  return (
    <>
      <h1>Profile</h1>
      <hr />
      <div>
        <label>Name: </label>
        <input
          name="name"
          type="text"
          value={name}
          onChange={(e) => handleChange(e, "name")}
        />
        {errors.name && (<span className="error">{errors.name}</span>)}
      </div>
      <div>
        <label>Email: </label>
        <input
          name="email"
          type="text"
          value={email}
          onChange={(e) => handleChange(e, "email")}
        />
      </div>
      <div>
        <label>Age: </label>
        <input
          name="age"
          type="number"
          value={age}
          onChange={(e) => handleChange(e, "age")}
        />
          {errors.age && (<span className="error">{errors.age}</span>)}

      </div>
      <CustomInput
        label="Address"
        placeholder="Address"
        name="address"
        type="text"
        value={address}
        onChange={handleChange}
      />
          {errors.address && (<span className="error">{errors.address}</span>)}

    </>
  );
};
