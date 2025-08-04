import useCustomHook2 from "../../hooks/useCustomHook2";
import { useCustomHook } from "../../hooks/useCustomHook";

const Products = () => {
  const { productData } = useCustomHook();
  const { usersData } = useCustomHook2();
  // console.log(usersData);

  return (
    <>
     <u><b>Problem:2 Make a Custom Hook For Data Fetching</b></u> 
     <h1>Custom Hook</h1> 
     <div>
      <li>First make the fetch call function</li>
      <li>useEffect for make the call</li>
      <li>useState  for store the data</li>
      <li>Handle error and loding state</li>
      <li>return the data as object format</li>


     </div>
     <hr style={{ height: "5px", backgroundColor: "#000"}} />
      <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "20px",
        padding: "20px",
      }}

    >
   
      {/* Product Title */}
      <div style={{ flex: "1", padding: "10px" }}>
        <h1>Product List</h1>
      </div>

      {/* Product Data */}
      <div
        style={{ flex: "2", padding: "10px", borderRight: "1px solid #ddd" }}
      >
        {productData?.map((product) => (
          <div
            key={product.id}
            style={{
              borderBottom: "1px solid #ccc",
              marginBottom: "1rem",
              paddingBottom: "0.5rem",
            }}
          >
            <h2 style={{ margin: "0 0 0.5rem 0" }}>{product.title}</h2>
            <p style={{ margin: 0 }}>{product.description}</p>
          </div>
        ))}
      </div>

      {/* User Data */}
      <div style={{ flex: "1", padding: "10px" }}>
        <h4>Users: Custom Hook</h4>
        {usersData?.map((user) => (
          <div key={user.id} style={{ marginBottom: "0.5rem" }}>
            <p style={{ margin: 0 }}>{user.firstName}</p>
          </div>
        ))}
      </div>
    </div>
    </>
    
  );
};

export default Products;
