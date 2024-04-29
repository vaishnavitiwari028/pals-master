import { useEffect, useState } from "react";

const useSessionStorage = (key, initialData) => {
  const [data, setData] = useState(() => {
    if (window.sessionStorage) {
      if (sessionStorage.getItem(key) !== null) {
        return JSON.parse(sessionStorage.getItem(key));
      }
      return initialData === undefined ? "undefined" : initialData;
    }
  });
  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(data));
  }, [key, data]);

  const clearData = () => {
    localStorage.removeItem(key);
  };
  return { data, setData, clearData };
};

export default useSessionStorage;
