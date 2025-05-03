import { RenderGeolocation } from '../renders/RenderGeolocation.jsx';
import { RenderClimatesHour } from '../renders/RenderClimatesHour.jsx';

function ClimateCity ({ climates, meteorology }) {

  return (
    <>
      <RenderGeolocation climates={climates} />
      <RenderClimatesHour meteorology={meteorology} />
    </>
  )
};

function NoClimateCity () {
  return (
    <div className='climates-container'>
      <h2>No se encontró ningún clima</h2>
    </div>
  )
};

export function RenderClimate ({ climates, meteorology }) {
  const hasClimate = (climates.id) ? true : false;

  return (
      hasClimate 
      ? <ClimateCity climates={climates} meteorology={meteorology} />
      : <NoClimateCity />
  )
}