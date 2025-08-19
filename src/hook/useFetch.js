import { useState, useEffect } from "react";
import axios from "axios";
export const BaseUril = "https://lujah-batch-ecommerce-bn.onrender.com";

function useFetch(endpoint, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!endpoint) return;

    setLoading(true);
    setError(null);

    axios(`${BaseUril}/${endpoint}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
          setError(err.message || "Something went wrong");
          setLoading(false);
        
      });

    
  }, [endpoint]);

  return { data, loading, error };
}

export default useFetch;
