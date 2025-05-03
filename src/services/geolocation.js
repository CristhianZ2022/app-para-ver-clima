const API_KEY = import.meta.env.VITE_API_KEY;

export const getGeoLocationData = () => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Tu navegador no soporta la geolocalización'));
    } else {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords;
            const response = await fetch(
              `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&lang=es&q=${latitude},${longitude}`
            );

            if (!response.ok) {
              const errorData = await response.json();
              throw new Error(
                errorData.error?.message || 'No se encontró información para la ubicación'
              );
            }

            const data = await response.json();
            const locationData = {
              icon: data.current.condition.icon,
              city: data.location.name,
              region: data.location.region,
              country: data.location.country,
              latitude: latitude,
              longitude: longitude,
              localtime: data.location.localtime,
              celcius: data.current.temp_c,
              farenheit: data.current.temp_f,
            };

            resolve(locationData);
          } catch (error) {
            reject(new Error('No se pudo obtener la información del clima'));
          }
        },
        (error) => {
          reject(new Error('No se pudo obtener la ubicación del dispositivo'));
        }
      );
    }
  });
};
