const API_KEY = import.meta.env.VITE_API_KEY;

export const searchCity = async ({ city }) => {
  if (!city || city.trim() === '') {
    throw new Error('Debes proporcionar una ciudad válida'); // Validación básica
  }

  try {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`);

    if (!response.ok) {
      throw new Error(json.error.message || 'No se encontró información para la ciudad ingresada');
    }

    const json = await response.json();

    // Me aseguro de que los datos existan antes de construir el objeto
    if (!json.location || !json.current) {
      throw new Error('Los datos de la ciudad son incompletos o no existen');
    }

    const climates = {
      id: json.location.name,
      icon: json.current.condition.icon,
      region: json.location.region,
      country: json.location.country,
      latitud: json.location.lat,
      longitude: json.location.lon,
      localtime: json.location.localtime,
      celcius: json.current.temp_c,
      farenheit: json.current.temp_f
    };

    return climates;

  } catch (error) {
    throw new Error('No se pudo encontrar la ciudad ingresada');
  }
};