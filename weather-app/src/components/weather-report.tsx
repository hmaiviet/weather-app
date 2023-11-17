import { WeatherResponse } from "../types/weather-response-type";
import { weatherCodeMapping } from "../utils/weather-code-mapping";

type Props = {
    weatherData: WeatherResponse | null
}

export const WeatherReport = ({ weatherData }: Props) => {
    if (!weatherData) return null;

    const iconArray = weatherCodeMapping[weatherData.current.weather_code as keyof typeof weatherCodeMapping];

    return (
        <div className='flex flex-col max-w-[400px] text-white font-sans items-start'>
            <div className="font-bold  self-center mb-[25px]">
                <div className="flex flex-row items-center justify-center">
                    {iconArray.map((SvgIcon) => <SvgIcon className="max-h-[200px] max-w-[200px]"/>)}
                </div>
                <div className="text-[40px]">{weatherData.location.name}</div>
                <div className="text-[25px]">{weatherData.current.weather_descriptions[0]}</div>
            </div>
            <div className="flex flex-col items-start">
                <div>Temperature: {weatherData.current.temperature} Celcius degrees</div>
                <div>Humidity: {weatherData.current.humidity}%</div>
                <div>Wind Speed: {weatherData.current.wind_speed} km/h</div>
            </div>
        </div>
    )
}