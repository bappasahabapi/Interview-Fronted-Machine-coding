export const CustomInput = ({ label, name, type = "text", value, onChange,placeholder }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "12px",
        gap: "10px", 
        marginTop:"10px",
        width:"20%"
      }}
    >
      <label
        htmlFor={name}
        style={{
          minWidth: "0px",
          fontWeight: "bold",
        }}
      >
        {label}{" :"}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(e, name)}
        placeholder={`Enter Your ${placeholder}`}
        style={{
          flex: 1,
          padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
    </div>
  );
};
