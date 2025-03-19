import PropTypes from "prop-types";
import useWeatherApi from "../../lib/weatherApi";

import IconWeatherSunny from "../../images/weather/sunny.svg?react";
import IconWeatherCloudy from "../../images/weather/cloudy.svg?react";

function getDate() {
  const now = new Date();
  const dateString = new Intl.DateTimeFormat('es', {
    weekday: 'long',
    day: '2-digit',
    month: 'long'
  }).format(now);

  return dateString;
}

function getTime() {
  const now = new Date();
  const dateString = new Intl.DateTimeFormat('es', {
    hour: 'numeric'
  }).format(now);

  const hour = parseInt(dateString, 10) % 12;
  const ampm = dateString > 12 ? 'PM' : 'AM'
  
  return `${hour}:00 ${ampm}`;
}

const translateWeather = (weather) => {
  if( weather === "Sunny" ||  weather === "Clear" ) {
    return "Soleado";
  }
  if( weather === "Clouds" ) {
    return "Nuboso";
  }
  return "Revuelto";
}

const getIcon = ( weather ) => {
  if( weather === "Sunny" ||  weather === "Clear" ) {
    return (
      <IconWeatherSunny
        className="w-8 h-8 stroke-current"
        width="24"
        height="24"
        alt="Icono indicando tiempo soleado"
      />);
  }
  if( weather === "Clouds" ) {
    return (
      <IconWeatherCloudy
        className="w-8 h-8 stroke-current"
        width="24"
        height="24"
        alt="Icono indicando tiempo nuboso"
      />);
  }

  return (
    <IconWeatherCloudy
      className="w-8 h-8 stroke-current"
      width="24"
      height="24"
      alt="Icono indicando tiempo nuboso"
    />);
}

function WeatherWidget({ country = "es", city = "Sevilla" }) {
  const { data, error } = useWeatherApi(country, city);

  const today = getDate();
  const now = getTime();

  return (
    <div className="px-6 pt-6">
      <div className="p-6 rounded-xl border-0 bg-secondary text-background-secondary shadow-xl md:aspect-video md:overflow-hidden hover:aspect-auto">
        <h2 className="text-2xl font-light">{city}</h2>
        <p className="flex justify-between items-baseline text-sm opacity-70">
          <span>{today}</span>
          <span>{now}</span>
        </p>
        {error || !data ? (
          <p className="px-4 py-8 text-sm opacity-70">No se pudo obtener información</p>
        ) : (
          <>
            <section className="flex justify-between mt-4 mb-8">
              <div className="flex items-start gap-2 pr-8">
                <picture className="w-auto aspect-square inline-block p-3 rounded-full bg-highlight/20">
                  {getIcon(data?.weather)}
                </picture>
                <div className="flex flex-col">
                  <h3 className="text-sm opacity-70">{translateWeather(data?.weather)}</h3>
                  <strong className="text-4xl font-light">{Math.round(data.temp)}º</strong>
                </div>
              </div>
              <section className="border-l border-l-background/10 pl-8 text-end">
                <h4 className="text-sm opacity-70">Sensación</h4>
                <strong className="text-lg font-light">{Math.round(data.temp_feels_like)}º</strong>
              </section>
            </section>
            <section className="mt-8 mb-4">
              <h3 className="text-xs opacity-70 uppercase">Previsión</h3>
              <ol className="mt-4 grid grid-cols-2 gap-4">
                <li className="px-2 py-4 rounded-xl bg-highlight/20 flex justify-between items-center">
                  <div>
                    <h4 className="text-white text-sm font-medium leading-none">
                      8:00 PM
                    </h4>
                    <span className="text-xs leading-none opacity-70">
                      Soleado
                    </span>
                  </div>
                  <span className="text-lg font-medium">24º</span>
                  <IconWeatherSunny
                    className="w-5 h-5 stroke-current"
                    width="16"
                    height="16"
                    alt="Icono indicando tiempo soleado"
                  />
                </li>
                <li className="px-2 py-4 rounded-xl bg-white/5 flex justify-between items-center">
                  <div>
                    <h4 className="text-white text-sm font-medium leading-none">
                      9:00 PM
                    </h4>
                    <span className="text-xs leading-none opacity-70">
                      Nuboso
                    </span>
                  </div>
                  <span className="text-lg font-medium">21º</span>
                  <IconWeatherCloudy
                    className="w-5 h-5 stroke-current"
                    width="16"
                    height="16"
                    alt="Icono indicando tiempo soleado"
                  />
                </li>
              </ol>
            </section>
          </>
        )}
      </div>
    </div>
  );
}

WeatherWidget.propTypes = {
  country: PropTypes.string,
  city: PropTypes.string,
};

export default WeatherWidget;
