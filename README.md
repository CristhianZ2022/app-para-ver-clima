API A USAR: https://www.weatherapi.com/


Características principales:

✔️ Funcionalidad de búsqueda para encontrar el clima por nombre de ciudad.

✔️ Muestra la temperatura actual, las condiciones climáticas y otros detalles. 

✔️ Botón “Usar mi ubicación” para detectar y mostrar el clima local.

✔️ Pronósticos meteorológicos por horas.


🌦 WeatherApp - Aplicación de Clima
📌 Descripción: WeatherApp es una aplicación que permite a los usuarios obtener información meteorológica detallada por hora para cualquier ciudad. Utilizando la API de WeatherAPI, la app muestra los datos actuales del clima y el pronóstico por horas en un diseño intuitivo con tarjetas interactivas. También incluye la opción de geolocalización para obtener el clima basado en la ubicación del usuario.

🚀 Características
✔️ Consulta climática por ciudad → Búsqueda de datos meteorológicos ingresando el nombre de una ciudad. ✔️ Geolocalización → Obtención de la condición climática actual según la ubicación del usuario con un botón. ✔️ Pronóstico detallado → Datos climáticos por hora organizados en tarjetas. ✔️ Diseño moderno → Interfaz intuitiva y elegante con fondos dinámicos según la condición climática. ✔️ Datos en tiempo real → Peticiones a la API para actualizar la información meteorológica.

🛠 Instalación y Configuración

1️⃣ Clonar el repositorio
bash
git clone https://github.com/CristhianZ2022/app-para-ver-clima
cd weather-app

2️⃣ Instalar dependencias
bash
npm install

3️⃣ Configurar la API Key
Crea un archivo .env en la raíz del proyecto y agrega tu API Key de WeatherAPI:

env
VITE_API_KEY=TU_API_KEY_AQUI
🔹 Puedes obtener una API Key gratuita registrándote en WeatherAPI.

4️⃣ Ejecutar la aplicación
bash
npm run dev
🔹 La app se abrirá en localhost:3000 y estará lista para usarse.

📌 Uso
Buscar clima por ciudad
Ingresa el nombre de la ciudad en el buscador.

Presiona el botón "Buscar".

La aplicación mostrará la condición actual y el pronóstico por horas.

Obtener clima por ubicación
Presiona el botón "Usar mi ubicación".

La aplicación accederá a la ubicación del usuario y mostrará los datos del clima correspondientes.

🛠 Tecnologías utilizadas
React.js → Para la estructura y renderizado de la interfaz.

WeatherAPI → Para obtener los datos meteorológicos.

CSS → Para el diseño moderno y fondos dinámicos.

📜 Licencia
Este proyecto es de código abierto bajo la MIT License.

📌 ¡Disfruta del clima en tiempo real con WeatherApp! 🌎☀️🌧

Este README refleja toda la funcionalidad de tu aplicación de manera clara y profesional. Puedes modificarlo según sea necesario o agregar imágenes para hacerlo aún más visual. ¡Tu app de clima se verá increíble! 🚀✨