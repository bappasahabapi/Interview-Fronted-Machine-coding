
import { useEffect, useState } from "react";

const mockData = [
  {
    id: 1,
    name: "Apple",
    description: "Good food for health",
    price: 10,
    deliveryTime: "in 20 minutes",
    imageUrl:
      "https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=27a346c2362207494baa7b76f5d606e5",
  },
  {
    id: 2,
    name: "Banana",
    description: "Good food for health",
    price: 20,
    deliveryTime: "in 20 minutes",
    imageUrl:
      "https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=27a346c2362207494baa7b76f5d606e5",
  },
];

const useFetchPromise = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await new Promise((resolve, reject) => {
          setTimeout(() => {
            if (mockData.length > 0) {
              resolve(mockData);
            } else {
              reject("No data is available");
            }
          }, 1000);
        });
        setData(response);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    //   call  the fuction
    fetchData();
  }, []);

  //return as an object
  return {
    data,
    loading,
    error
  };
};

export default useFetchPromise;
