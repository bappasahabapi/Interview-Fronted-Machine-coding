//todo:
//* First make a function that fetch data
//* Now make the debouncing for performance optimazation
//* Show the search result based on onFocus and onBlur
//* caching the result to reduce the api call 

import { useEffect, useState } from "react";

const SearchTest = () => {
  const [results, setResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [cache, setCache]=useState({}) // as i need to key: value pair

  const url = `https://dummyjson.com/recipes/search?q=` + searchTerm;
  const fetchRecipeData = async () => {

    if(cache[searchTerm]){
      // console.log('returend from cache',searchTerm)
      setResults(cache[searchTerm])
      return;
    }

    //  console.log('api call',searchTerm)

    const data = await fetch(url);
    const json = await data.json();

    setResults(json?.recipes);

    //handle caching
    setCache(preCache=>({
      ...preCache,
      [searchTerm]:json?.recipes
    }))
  };

  useEffect(() => {
    const timer = setTimeout(fetchRecipeData, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchTerm]);

  return (
    <div>
      <h1>seach bar</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: "50%" }}
          placeholder="Seach Anything"
          onFocus={()=>setShowResults(true)}
          onBlur={()=>setShowResults(false)}
        />
      </div>
      {showResults && (
        <div className="result-container">
          {results.map((item) => (
            <span className="result" key={item.id}>
              {item.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchTest;
