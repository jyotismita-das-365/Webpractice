import { useCallback, useEffect, useState } from "react";

const useAsync = (asyncFunction, immediate = true) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(immediate);

  const run = useCallback(
    async (...args) => {
      setLoading(true);
      setError(null);
      try {
        const response = await asyncFunction(...args);
        setData(response);
        return response;
      } catch (err) {
        console.warn("Async function error:", err);
        setError(err);
        return null;
      } finally {
        setLoading(false);
      }
    },
    [asyncFunction],
  );

  useEffect(() => {
    if (immediate) {
      run().catch((err) => {
        console.warn("Initial async call failed:", err);
      });
    }
  }, [immediate, run]);

  return { data, error, loading, run, setData };
};

export default useAsync;
