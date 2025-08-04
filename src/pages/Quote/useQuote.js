import { useEffect, useState } from "react";

export const useFetchQuotes = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState({
    status:false,
    message:''
  });
  const [error, setError] = useState(null);
  const url = `https://dummyjson.com/quotes?limit=20`;

  const fetchQuotes = async () => {
    setLoading({
        ...loading,
        status:true,
        message:"Quotes data  is loading..."
    });

    try {
      const res = await fetch(url);
      const json = await res.json();
      setData(json.quotes);
    } catch (err) {
      setError(err);
    }finally{
        setLoading({
        ...loading,
        status:false,
        message:""
    });
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  return { data,loading,error };
};
