/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

//used for which type of data i need to store from api
const initialData = {
  id: 1,
  title: "",
  description:
    "",
  price: 9.99,
  discountPercentage: 10.48,
  stock: 99,
  rating: 2.56,
  comment:""
};


const url = "https://dummyjson.com/products?limit=5";

export const useCustomHook = () => {

  const [productData, setProductData] = useState([initialData]);
  const [loading, setLoading]=useState({state:false, message:""})
  const [error, setError]=useState(null)


  //fetch function 
  const fetchProducts=async()=>{
    const data =await fetch(url);
    const json =await data.json();

    // console.log(json.products)

    setProductData(json.products)
  }


  useEffect(()=>{

      fetchProducts()
    // const timer =setInterval(fetchProducts,5000);

    // return ()=>{
    //     clearInterval(timer)
    // }


  },[])

  return {productData,loading,error}


};

// export default useCustomHook
