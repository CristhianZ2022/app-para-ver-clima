import './App.css'
import { RenderClimate } from './components/Climates.jsx';
import { RenderLocation } from './components/Location.jsx';

import { useClimate } from './hooks/useClimate.js';
import { useSearchCity } from './hooks/useSearchCity.js';
import { useLocation } from './hooks/useLocation.js';

import { useMemo, useCallback, useState, useEffect } from 'react';
import debounce from 'just-debounce-it';

function App() {
  const {climates, loading, getClimate, clearClimate, meteorology} = useClimate();
  const {city, setCity, error, clearError} = useSearchCity();
  const {geolocation, geoError, loading: geoLoading, getLocation, clearLocation, meteorologyLocation} = useLocation();
  const [isUsingLocation, setIsUsingLocation] = useState(false);

  // Debounce
  const getClimateDebounced = useCallback( debounce(city => {
    clearLocation();
    getClimate(city);
    setIsUsingLocation(false);
  }, 500), []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    getClimate(city);
  };

  const handleChange = (e) => {
    const newQuery = e.target.value;
    if (newQuery.startsWith(' ')) return;

    setCity(newQuery);
    getClimateDebounced(newQuery);
  }

  const handleUseLocation = async () => {
    try {
      clearError();
      setIsUsingLocation(true);
      await getLocation();
      setCity('');
      clearClimate();

    } catch (e) {
      setIsUsingLocation(false);
    }
  }

  useEffect(() => {
    handleUseLocation(); // Llama a la función cuando el componente se monta
  }, []);

  const memoizedClimates = useMemo(() => {
    return climates.length > 0 ? climates[0] : null;
  }, [climates]);

  return (
    <div className='page'>
    <h1>Condición Climática por ciudad</h1>
      <header>
        <form action="" onSubmit={handleSubmit}>
          <input 
            onChange={handleChange}
            value={city} type='text' name='query' 
            placeholder='Quito, London, Munich, New York...'
          />
          <button type='submit'>Buscar</button>
          <button type='button' onClick={handleUseLocation}>Usar mi ubicación</button>
        </form>
        { setIsUsingLocation ? 
          (geoError && <p style={{color: 'red'}}>{geoError}</p> ) :
          (error && <p style={{color: 'red'}}>{error}</p>)
        }
        
      </header>
      <main>
        {geoLoading ? (
          <p>Cargando ubicación...</p>
        ) : isUsingLocation ? (
          <RenderLocation geolocation={geolocation} meteorology={meteorologyLocation} />
        ) : loading ? (
          <p>Cargando clima...</p>
        ) : memoizedClimates ? (
          <RenderClimate climates={memoizedClimates} meteorology={Array.isArray(meteorology) ? meteorology : []} />
        ) : (
          <p>No se encontró ningún clima</p>
        )}
      </main>
    </div>
  )
}

export default App