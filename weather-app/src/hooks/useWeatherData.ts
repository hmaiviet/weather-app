import { useState } from "react";
import * as weatherDataService from "./../services/weather-data-service";
import { useQuery } from "react-query";
import { WeatherResponse } from "../types/weather-response-type";
import { ResponseError } from "../types/response-error-type";

const DEFAULT_DATA = {};

// const fetchData = (location: string) => {
//     return weatherDataService.get(location);
// };

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
