import { useEffect, useRef } from "react";

const useClickOutside = ({ callback = () => {} }) => {
  const elRef = useRef();
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!elRef.current?.contains(e.target)) callback();
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return elRef;
};

export default useClickOutside;
