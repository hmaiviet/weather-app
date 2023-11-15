import * as weatherDataService from "./../services/weather-data-service";
import { useQuery } from "react-query";

// type UseTimelineResponse = TimelineResponse & {
//     isError: boolean;
//     isLoading: boolean;
// };

const DEFAULT_DATA = {};

export const useWeatherData = () => {
    const { isError, isLoading, data } = useQuery(["location", "London"], () =>
        weatherDataService.get("London")
    );
    const weatherData = data ?? DEFAULT_DATA;

    return {
        isError,
        isLoading,
        weatherData,
    };
};
