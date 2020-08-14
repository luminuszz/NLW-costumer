import { useState, Dispatch, SetStateAction, useEffect } from 'react';

type Response<T> = [T, Dispatch<SetStateAction<T>>];

function usePersistState<T>(key: string, initialState: T): Response<T> {
  const [state, setState] = useState(() => {
    const storagedValue = localStorage.getItem(key);
    if (storagedValue) {
      return JSON.parse(storagedValue);
    }
    return initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  });

  return [state, setState];
}

export default usePersistState;
