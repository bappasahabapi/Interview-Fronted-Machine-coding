/* eslint-disable no-unused-vars */
/* 
1. we need fetch fuction to call the api
2. we need useState to store the data
3. we need useEffect for call the api
4. we can make loding state
5. we can also make error state
6 . finally return the state as an object


*/

import { useEffect, useState } from "react";

const initialUserData = {
  id: 1,
  firstName: "Emily",
  lastName: "Johnson",
  maidenName: "Smith",
  age: 28,
  gender: "female",
};

const url = "https://dummyjson.com/users?limit=10";

 const useCustomHook2 = () => {
    //   const [usersData , setUsersData] = useState([initialUserData]);
  const [usersData , setUsersData] = useState([]);
  const [loading , setLoading]=useState({
    state:false,
    message:"",
  })
  const [error, setError]=useState(null)

  //fetch data first way
  const fetchUsers = async () => {
    const response = await fetch(url);
    const data =response.json()
    //store the data
    setUsersData(data);
  };

  const fetchUsers2 =async()=>{
       setLoading({
        ...loading,
        state:true,
        message:"Fetching data ..."
    });
    try {
     

    const response =await fetch(url)
    const json =await response.json()

    const users =json.users;
    console.log(users)
    setUsersData(users)

        
    } catch (error) {
        setError(error)
    }
    finally{
        setLoading({
            ...loading,
            state:false,
            message:""
        })
    }
    
    

  }


  useEffect(()=>{
    // fetchUsers();
    fetchUsers2();
  },[])

  return {usersData,loading,error}
};


export default useCustomHook2