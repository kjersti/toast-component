import React from "react";

const useEscapeKey = (onEscapeKeyPressed) => {
  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Escape") {
        onEscapeKeyPressed();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onEscapeKeyPressed]);
};

export default useEscapeKey;
