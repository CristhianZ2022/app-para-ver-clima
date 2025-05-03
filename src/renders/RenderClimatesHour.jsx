import { useState } from 'react';
import { getImagesClimates } from '../services/imagesClimates';

export function RenderClimatesHour({ meteorology }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemWidth = 246;

  const handleClickPrev = () => {
    if (meteorology.length > 0) {
      setCurrentIndex((currentIndex) => Math.max(currentIndex - 1, 0)); // Se asegura de no ir más allá del primer índice
    }
  };

  const elementsPerView = Math.floor(window.innerWidth / itemWidth);
  const maxIndex = meteorology.length - elementsPerView;
  
  const handleClickNext = () => {
    if (meteorology.length > 0) {
      setCurrentIndex((currentIndex) =>
        Math.min(currentIndex + 1, meteorology.length - 1) // Se asegura de no ir más allá del último índice
      );
    }
  };

  return (
    <>
      <footer className="climates-footer">
        <div className="carousel-container">
          <button className="carousel-button prev" 
            onClick={handleClickPrev}
            disabled={currentIndex === 0}
          >
            <i className="material-icons">chevron_left</i>
          </button>
          <div className="carousel-track-wrapper">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * (itemWidth + 20)}px)`, // Desplazamiento calculado
              }}
            >
              {Array.isArray(meteorology) && meteorology.length > 0 ? (
                meteorology.map((hour, index) => {
                  // Determinar si es de día o noche
                  const hourNumber = parseInt(hour.hour, 10);
                  const isDaytime = hourNumber >= 6 && hourNumber <= 18;
                  const isNighttime = hourNumber >= 19 || hourNumber <= 5;

                  const colorStyle = isNighttime ? { color: "white" } : { color: "black" };

                  const images = getImagesClimates();

                  const backgroundImage = isDaytime ? images.day[hour.condition.trim()] : images.night[hour.condition.trim()];

                  return (
                    <div className="climates-footer-items" key={index} style={{
                      backgroundImage: `url(${backgroundImage})`
                    }
                    }>
                      <img src={hour.icon} alt="icono de clima" width={100} height={100} />
                      <h4 style={colorStyle}>{hour.hour || "Hora no disponible"}</h4>
                      <p style={colorStyle}>{hour.celcius || "Temperatura no disponible"}°C</p>
                      <p style={colorStyle}>{hour.condition || "Condición no disponible"}</p>
                      <p style={colorStyle}>{hour.date || "Fecha no disponible"}</p>
                    </div>
                  );
                })
              ) : (
                <p>No hay datos meteorológicos disponibles</p>
              )}
            </div>
          </div>
          <button className="carousel-button next" 
            onClick={handleClickNext}
            disabled={currentIndex >= maxIndex}
          >
            <i className="material-icons">chevron_right</i>
          </button>
        </div>
      </footer>
    </>
  )
}