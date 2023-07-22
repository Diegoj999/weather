import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const useMultiplyFetch = (urls, query) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const promises = urls.map((url) =>
          fetch(url).then((response) => response.json())
        );
        const results = await Promise.all(promises);
        setData(results);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
      } finally {
        setLoading(false);

        query && toast.success("La búsqueda se realizó con éxito");
      }
    };
    fetchData();

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]); 

  return { loading, data, error };
};

export default useMultiplyFetch;