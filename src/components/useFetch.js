import { useEffect, useState } from "react";

const useFetch = (fetch_url) => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    fetch(fetch_url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(`Unable to get data: ${response.statusText}`);
      })
      .then((json) => setData(json))
      .catch((err) => setError(err.message))
      .finally(() => setIsPending(false));
  }, [fetch_url]);
  return { data, isPending, error };
};

export default useFetch;
