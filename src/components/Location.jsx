import { RenderGeolocation } from '../renders/RenderGeolocation.jsx';
import { RenderClimatesHour } from '../renders/RenderClimatesHour.jsx';

function Location({ geolocation, meteorology }) {

  return (
    <>
      <RenderGeolocation geolocation={geolocation} />
      <RenderClimatesHour meteorology={meteorology} />
    </>
  )
};

function NoLocation () {
  return (
    <div className='climates-container'>
      <h2>No se encontró ningún clima con tu ubicación</h2>
    </div>
  )
};

export function RenderLocation ({ geolocation, meteorology }) {
  const hasLocation = (geolocation.city) ? true : false;

  return (
      hasLocation 
      ? <Location geolocation={geolocation} meteorology={meteorology} />
      : <NoLocation />
  )
}