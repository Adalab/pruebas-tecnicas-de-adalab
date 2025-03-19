import {useState, useEffect} from 'react';

const API_PATH = import.meta.env.PROD ? '/api/weather' : 'http://localhost:3000/api/weather';

function useWeatherApi(country, city) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setData(null);
    setError(null);

    const fetchWeather = async () => {
      try {
        const res = await fetch(`${API_PATH}/${country}/${city}/`);
        const dataJson = await res.json();
    
        console.log(dataJson);
        
        setData(dataJson);
      }
      catch( err ) {
        setError(err.toString());
      }
    };
    
    fetchWeather();
  }, [country, city]);

  return {data, error};
}

export default useWeatherApi;