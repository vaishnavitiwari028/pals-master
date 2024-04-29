import { useEffect, useRef, useState } from "react";

const usePromise = (asyncFunction) => {
  const [loading, setLoading] = useState(null);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const callbackRef = useRef(asyncFunction);

  useEffect(() => {
    retry();
  }, [callbackRef.current]);

  const retry = async () => {
    try {
      setLoading(true);
      const data = await callbackRef.current();
      if (data) {
        setLoading(false);
        setResponse(data);
        setError(null);
      }
    } catch (err) {
      setLoading(false);
      setResponse(null);
      setError(err);
    }
  };

  return { response, error, loading, retry };
};

export default usePromise;
