"use client";
import { useState, useEffect, useCallback } from "react";

const useDropdown = () => {
  const [dropdown, setDropdown] = useState(false);

  const handleWindowClick = useCallback((event: MouseEvent) => {
    if (
      event.target &&
      !(event.target as HTMLDivElement).closest(".relative")
    ) {
      setDropdown(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("click", handleWindowClick);

    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, [handleWindowClick]);

  return { dropdown, setDropdown };
};

export default useDropdown;
