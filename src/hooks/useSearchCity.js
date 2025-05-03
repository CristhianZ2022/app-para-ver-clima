import { useState , useEffect, useRef } from 'react';

export function useSearchCity() {
  const [error, setError] = useState(null);
  const [city, setCity] = useState('');
  const isFirstRender = useRef(true);
  const shouldValidate = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = city === '';
      return;
    }

    if (!shouldValidate.current) return;

    if (city === '') {
      setError('No se puede buscar una ciudad vacía');
      return;
    }

    if (city.match(/\d+$/)) {
      setError('No se puede buscar por número');
      return;
    }

    setError(null);
  }, [city]);

  const clearError = () => {
    setError(null);
    shouldValidate.current = false;
    setTimeout(() => {
      shouldValidate.current = true;
    }, 2000);
  };

  return { error, city, setCity, clearError };
}