import * as weatherDataService from "./../services/weather-data-service";
import { useQuery } from "react-query";
import { WeatherResponse } from "../types/weather-response-type";

//This hook streamlines the data fetching process as well as error handling for the app
export const useWeatherData = (location: string) => {
    const { isError, error, data, refetch } = useQuery<WeatherResponse>(
        ["weather-data", location],
        () => weatherDataService.get(location),
        {
            enabled: false,
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            retry: false,
        }
    );
    const weatherData = data ?? null;

    return {
        isError,
        error,
        data: weatherData,
        refetch,
    };
};
