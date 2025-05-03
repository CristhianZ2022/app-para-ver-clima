import { useRef, useState, useCallback } from 'react';
import { searchCity } from '../services/climates.js';
import { getWeatherMeterological } from '../services/meteorological.js';

export function useClimate() {
  const [climates, setClimates] = useState([]); // Estado para guardar los datos de clima
  const [meteorology, setMeteorology] = useState([]); // Estado para guardar los datos meteorológicos
  const [loading, setLoading] = useState(false); // Estado para manejo de carga
  const [error, setError] = useState(null); // Estado para manejar errores
  const previusCity = useRef(null); // Estado para manejar el estado de búsqueda

  const getClimate = useCallback(async (city) => {
    if (city === previusCity.current) return;

    try {
      setLoading(true);
      setError(null);
      
      previusCity.current = city;

      const newClimates = await searchCity({ city });
      setClimates([newClimates]);

      const newMeteorology = await getWeatherMeterological({ city });
      setMeteorology(newMeteorology);

    } catch (e) {
      setError(e.message);
      setClimates([]); // Limpio los datos de la lista
      setMeteorology([]); // Limpio los datos meteorológicos

    } finally {
      setLoading(false);
    }
  }, []);

  const clearClimate = () => {
    setClimates([]);
    setMeteorology([]);
    setError(null);
  };

  return {climates, getClimate, loading, error, clearClimate, meteorology};
};