import React from "react";
import useEscapeKey from "../../hooks/use-escape-key";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);
  const dismissAll = React.useCallback(() => setToasts([]), []);
  useEscapeKey(dismissAll);

  const popToast = React.useCallback(
    (variant, message) => {
      const nextToasts = [
        ...toasts,
        { id: Math.random(), variant: variant, message: message },
      ];
      setToasts(nextToasts);
    },
    [toasts]
  );

  const dismissToast = React.useCallback(
    (id) => {
      const nextToasts = toasts.filter((t) => t.id !== id);
      setToasts(nextToasts);
    },
    [toasts]
  );

  const value = {
    toasts,
    dismissToast,
    popToast,
  };

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;
