import React, { useState } from 'react';
import './App.css';
import { ReactComponent as WeatherLogo } from "./assets/app-logo.svg";
import { ReactComponent as BackIcon } from "./assets/back-arrow.svg";
import { WeatherReport } from './components/weather-report';
import { WeatherResponse } from './types/weather-response-type';
import { SubmitButton } from './components/submit-button';
import { useWeatherData } from './hooks/useWeatherData';
import { ErrorMessage } from './components/error-message';


function App() {
  const [input, setInput] = useState(''); //state of the input field
  const [weatherData, setWeatherData] = useState<WeatherResponse | null>(null); //state of the weather data
  const [isError, setIsError] = useState(false); //state of checking errors

  const { refetch, error} = useWeatherData(input);

  //handles the key press action on the input field
  const handleKeyDown = async (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      await refetch().then((response) => {
        if (response.status==='success')
        setWeatherData(response.data);
      if (response.status === 'error')
      setIsError(true);
  })
}
}

  //handles the click action on the button
  const onSubmitClick = async () => {
    await refetch().then((response) => {
      if (response.status==='success')
        setWeatherData(response.data);
      if (response.status === 'error')
        setIsError(true);
    })
  }

  //This functional react componenet should render a single page application. There is no routing or navigation in this application.
  //The rendering logic is all based on the state of the data (If there is no error and there is weather data then the app renders the information).
  return (
    <div className="App">
      <div className="bg-[#3059c9] min-h-[100vh] flex flex-col items-center justify-center">
        {weatherData || isError ?
          <BackIcon className='self-center fill-white w-[40px] h-[40px] hover:cursor-pointer mr-[10px] mb-[20px]'
            onClick={() => { setWeatherData(null); setIsError(false) }} />
        : null}
        {!weatherData && !isError ?
          <div className='flex flex-col items-center justify-center'>
            <WeatherLogo className='max-w-[400px] max-h-[400px]'/>
            <h2 className='my-[20px] font-sans font-bold text-white'>Welcome to Hung's weather app</h2>
            <span className='text-white mb-[15px] text-[12px]'>Enter a city name or coordinates separated by a comma. Eg: 40.7831,-73.9712</span>
            <input
              className={'rounded-md relative max-w-[360px] pr-0 text-sm text-black border rounded-l-5 h-[50px] text-[14px] pl-2'}
              placeholder={'London'}
              onChange={(event) => {
                const { value } = event.target;
                setInput(value);
              }}
              onKeyDown={handleKeyDown}
            />
            <SubmitButton onClick={onSubmitClick}/>
          </div>
        : <WeatherReport weatherData={weatherData} />}
        { isError && <ErrorMessage error={(error as Error).message}/>}

      </div>
    </div>
  );
}

export default App;
