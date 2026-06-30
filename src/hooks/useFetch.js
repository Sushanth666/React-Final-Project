import { useEffect, useState } from "react";

function useFetch(apiFunction) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await apiFunction();

        setData(response);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [apiFunction]);

  return {
    data,
    loading,
    error,
  };
}

export default useFetch;