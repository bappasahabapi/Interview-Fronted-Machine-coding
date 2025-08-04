import { useFetchQuotes } from "./useQuote";

const Quote = () => {
  const { data,loading } = useFetchQuotes();
//   console.log(data);


  if (loading.status) {
    return <h4 style={{textAlign:'center'}}>{loading.message}</h4>;
  }

    return (
    <div>
      <p>Quotes</p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        {data.map((post) => (
          <div
            key={post.id}
            style={{
              flex: "0 0 20%",
              textAlign: "center",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "6px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              marginBottom: "10px",
            }}
          >
            <li style={{ listStyle: "none" }}>{post.author}</li>
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default Quote;
