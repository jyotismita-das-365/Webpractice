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
        // Don't re-throw to prevent component crash
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
        // Silently handle initial load errors
      });
    }
  }, [immediate, run]);

  return { data, error, loading, run, setData };
};

export default useAsync;
