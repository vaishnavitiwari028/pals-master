import { useEffect, useState } from "react";

const useDebounce = (value, delay = 1000) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounced(value);
    }, delay);
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [value]);
  return [debounced];
};

export default useDebounce;
