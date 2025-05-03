import { useState } from 'react';
import { getGeoLocationData } from '../services/geolocation'; // Ajusté la ruta según tu estructura
import { useCallback } from 'react';
import { getWeatherMeterological } from '../services/meteorological.js';

export function useLocation() {
  const [geolocation, setGeolocation] = useState(null); // Estado para guardar datos de ubicación
  const [meteorologyLocation, setMeteorologyLocation] = useState([]); // Estado para guardar los datos meteorológicos
  const [geoError, setGeoError] = useState(null); // Estado para manejar errores
  const [loading, setLoading] = useState(false); // Estado para manejo de carga

  const getLocation = useCallback(async () => {
    try {
      setLoading(true);
      setGeoError(null); // Limpié errores previos
      const locationData = await getGeoLocationData(); // Obtuve los datos de ubicación
      setGeolocation(locationData); // Actualicé el estado con los datos obtenidos

      const newMeteorology = await getWeatherMeterological({ city: locationData.city }); // Obtuve los datos meteorológicos
      setMeteorologyLocation(newMeteorology); // Actualicé el estado con los datos obtenidos

    } catch (e) {
      setGeoError(e.message); // Actualicé el estado de error
      setGeolocation(null); // Limpié los datos de geolocalización
      setMeteorologyLocation([]); // Limpié los datos meteorológicos

    } finally {
      setLoading(false); // Desactivé el estado de carga
    }
  }, []);

  const clearLocation = () => {
    setGeolocation(null); // Limpié los datos de geolocalización
    setGeoError(null); // Limpié errores previos
    setMeteorologyLocation([]); // Limpié los datos meteorológicos
  };

  return { geolocation, geoError, loading, getLocation, clearLocation, meteorologyLocation };
}
