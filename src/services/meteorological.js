const API_KEY = import.meta.env.VITE_API_KEY;
const DAYS = 2;

// Obtener datos meteorológicos por hora
export const getWeatherMeterological = async ({ city }) => {
  try {
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=${DAYS}&aqi=no`);

    const json = await response.json();

    //  Accedo a los datos del pronostico por hora.
    const hourMeteorological = json.forecast.forecastday[0].hour;

    // Me aseguro de que los datos existan antes de construir el objeto
    if (!hourMeteorological) {
      throw new Error('Los datos de la ciudad son incompletos o no existen');
    }

    const meteorology = json.forecast.forecastday.flatMap((day) =>
      day.hour.map((meteorology) => ({
        icon: meteorology.condition.icon,
        hour: meteorology.time.split(' ')[1],
        celcius: meteorology.temp_c,
        condition: meteorology.condition.text,
        date: meteorology.time.split(' ')[0]
    }))
  );

    return meteorology;

  } catch (error) {
    throw new Error('No hay datos meteorológicos para la ciudad ingresada');
  }
};