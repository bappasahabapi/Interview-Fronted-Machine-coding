import { useEffect, useState } from "react"

// const url ="https://jsonplaceholder.typicode.com/todos"

const useFetchTodo = (url) => {

  const [data,setData]=useState([]);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState(null);


  useEffect(()=>{

    const fetchTodoData =async ()=>{
      setLoading(true);
      try{
        const response =await fetch(url);
        const json =await response.json();

        setData(json)
      }catch(error){
        setError(error);
      }
    };

    fetchTodoData()

  },[url]);

  return { data, loading, error}


}

export default useFetchTodo