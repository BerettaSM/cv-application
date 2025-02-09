import { useCallback, useEffect, useState } from "react";

export default function useLocalStorage<T>(key: string, initialState: T) {
  const [storage, setStorage] = useState<T>(initialState);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const storageData = localStorage.getItem(key);
    if (storageData) setStorage(JSON.parse(storageData));
  }, [key]);

  const updateLocalStorage = useCallback(
    (newStorage: T) => {
      localStorage.setItem(key, JSON.stringify(newStorage));
      setStorage(newStorage);
    },
    [key],
  );

  return { storage, updateLocalStorage };
}
