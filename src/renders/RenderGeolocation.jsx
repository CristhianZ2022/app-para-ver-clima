export function RenderGeolocation({ geolocation, climates }) {
  if (geolocation) {
    return (
      <>
      <img className="img-icon" src={geolocation.icon} alt="icono de clima" width={100} height={100} />
        <section className='climates-container'>
          <h2 className="city">{geolocation.city}</h2>
          <p className="region">{geolocation.region}</p>
          <p className="country">{geolocation.country}</p>
          <p className="latd">{geolocation.latitude}</p>
          <p className="long">{geolocation.longitude}</p>
          <p className="localtime">{geolocation.localtime}</p>
          <p className="grades">{geolocation.celcius}°C</p>
        </section>
      </>
    )
  } else if (climates) {
    return (
      <>
        <img className="img-icon" src={climates.icon} alt="icono de clima" width={100} height={100} />
        <section className='climates-container'>                 
          <h2 className="city">{climates.id}</h2>
          <p className="region">{climates.region}</p>
          <p className="country">{climates.country}</p>
          <p className="latd">{climates.latitud}</p>
          <p className="long">{climates.longitude}</p>
          <p className="localtime">{climates.localtime}</p>
          <p className="grades">{climates.celcius}°C</p>
        </section>
      </>
    )
  }
}