import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import classNames from 'classnames';
import { useWeatherData } from './hooks/useWeatherData';
import { QueryClient, QueryClientProvider } from 'react-query'
import { get } from './services/weather-data-service';

const queryClient = new QueryClient()

function App() {
  const [input, setInput] = useState('');

  // const {weatherData} = useWeatherData();

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      get(input);
      console.log('do validate',event)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='flex flex-col'>
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className='my-[30px] font-sans font-bold'>Welcome to Hung's weather app</h2>
          <input
            className={classNames(
              'rounded-md relative w-full pr-0 text-sm text-black border rounded-l-5 h-[50px] text-[14px] pl-2',
              'hover:border-grey-500 focus:border-blue-600',
            )}
            placeholder={'Enter a city name or coordinates separated by a comma. Eg: 40.7831,-73.9712'}
            onChange={(event) => {
              const { value } = event.target;
              setInput(value);
              console.log(value);
              // setCtaClicked(false);
            }}
            onKeyDown={handleKeyDown}
            // disabled={isDisabled}
          />
        </div>
        {/* <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
