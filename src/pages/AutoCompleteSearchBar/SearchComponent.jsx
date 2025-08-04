//todo:
//* First make a function that fetch data
//* Now make the debouncing for performance optimazation
//* Show the search result based on onFocus and onBlur
//* caching the result to reduce the api call

import { useEffect, useState } from "react";

const SearchComponent = () => {
  const [results, setResults] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [showResults, setShowResults] = useState(false);

  //caching
  const [cache, setCache] = useState({});

  //*fetch data
  const url = "https://dummyjson.com/recipes/search?q=" + searchText;
  const fetchData = async () => {
    if (cache[searchText]) {
      // console.log("Returned form cache", searchText);
      setResults(cache[searchText]);
      return;
    }
    // console.log("api call", searchText);
    const data = await fetch(url);
    const json = await data.json();

    setResults(json?.recipes);
    setCache((pre) => ({ ...pre, [searchText]: json?.recipes || [] }));
  };

  useEffect(() => {
    //   fetchData();
    const timer = setTimeout(fetchData, 500);

    //cleanup fn will written in return
    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  return (
    <div>
      <div>
       <u><b>Problem:3 Make a Auto Search bar that can handle</b></u> 
      <li> First make a function that fetch data</li>
      <li>Now make the debouncing for performance optimazation</li>
      <li>Show the search result based on onFocus and onBlur</li>
      <li>caching the result to reduce the api call</li>
      </div>
      <h1 style={{ textAlign: "center" }}>Auto Complete Search Bar</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input
          type="text"
          style={{ width: "50%" }}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onFocus={() => setShowResults(true)}
          onBlur={() => setShowResults(false)}
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

export default SearchComponent;
