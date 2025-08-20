import { useState, useEffect } from "react";
import axios from "axios";
export const BaseUrl = "https://chaitra-ecommerce-backend.onrender.com";

function useFetch(endpoint, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token")
  useEffect(() => {
    if (!endpoint) return;

    setLoading(true);
    setError(null);

    axios(`${BaseUrl}/${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
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
