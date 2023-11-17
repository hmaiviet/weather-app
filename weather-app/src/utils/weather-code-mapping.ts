import { ReactComponent as Sunny } from "./../assets/weather-logos/sunny.svg";
import { ReactComponent as Cloudy } from "./../assets/weather-logos/cloudy.svg";
import { ReactComponent as Rainy } from "./../assets/weather-logos/rainy.svg";
import { ReactComponent as HeavyRain } from "./../assets/weather-logos/rainy-heavy.svg";
import { ReactComponent as ThunderStorm } from "./../assets/weather-logos/thunder.svg";
import { ReactComponent as Snow } from "./../assets/weather-logos/snowy.svg";
import { ReactComponent as HeavySnow } from "./../assets/weather-logos/snowy-heavy.svg";

export const weatherCodeMapping = {
    395: [ThunderStorm, Snow], //"Moderate or heavy snow in area with thunder", //SNOW THUNDER
    392: [ThunderStorm, Snow], //"Patchy light snow in area with thunder", //SNOW THUNDER
    389: [ThunderStorm], //"Moderate or heavy rain in area with thunder", //RAIN THUNDER
    386: [ThunderStorm], //"Patchy light rain in area with thunder", //RAIN THUNDER
    377: [HeavyRain, Snow], //"Moderate or heavy showers of ice pellets", //RAIN ICE
    374: [Rainy, Snow], //"Light showers of ice pellets", //RAIN ICE
    350: [Snow], //"Ice pellets", //ICE
    359: [HeavyRain], //"Torrential rain shower", //HEAVY RAIN
    356: [HeavyRain], //"Moderate or heavy rain shower	", //HEAVY RAIN
    314: [HeavyRain], //"Moderate or Heavy freezing rain", //HEAVY RAIN
    308: [HeavyRain], //"Heavy rain", //HEAVY RAIN
    305: [HeavyRain], //"Heavy rain at times", //HEAVY RAIN
    200: [ThunderStorm], //"Thundery outbreaks in nearby", //LIGHTNING
    371: [HeavySnow], //"Moderate or heavy snow showers", //HEAVY SNOW
    338: [HeavySnow], //"Heavy snow", //HEAVY SNOW
    335: [HeavySnow], //"Patchy heavy snow", //HEAVY SNOW
    230: [HeavySnow], //"Blizzard", //HEAVY SNOW
    227: [HeavySnow], //"Blowing snow", //HEAVY SNOW
    368: [Snow], //"Light snow showers", //SNOW
    332: [Snow], //"Moderate snow", //SNOW
    329: [Snow], //"Patchy moderate snow", //SNOW
    326: [Snow], //"Light snow", //SNOW
    323: [Snow], //"Patchy light snow", //SNOW
    179: [Snow], //"Patchy snow nearby", //SNOW
    182: [Snow], //"Patchy sleet nearby", //SLEET
    365: [Snow], //"Moderate or heavy sleet showers", //SLEET
    362: [Snow], //"Light sleet showers", //SLEET
    320: [Snow], //"Moderate or heavy sleet", //SLEET
    317: [Snow], //"Light sleet", //SLEET
    260: [Cloudy], //"Freezing fog", //FOG
    248: [Cloudy], //"Fog", //FOG
    143: [Cloudy], //"Mist", //FOG
    122: [Cloudy], //"Overcast", //VERY CLOUDY
    119: [Cloudy], //"Cloudy", //CLOUDY
    116: [Cloudy], //"Partly Cloudy", //CLOUDY
    353: [Rainy], //"Light rain shower	", //RAIN
    311: [Rainy], //"Light freezing rain", //RAIN
    302: [Rainy], //"Moderate rain", //RAIN
    299: [Rainy], //"Moderate rain at times", //RAIN
    296: [Rainy], //"Light rain", //RAIN
    293: [Rainy], //"Patchy light rain", //RAIN
    284: [Rainy], //"Heavy freezing drizzle", //RAIN
    281: [Rainy], //"Freezing drizzle", //RAIN
    266: [Rainy], //"Light drizzle", //RAIN
    263: [Rainy], //"Patchy light drizzle", //RAIN
    185: [Rainy], //"Patchy freezing drizzle nearby", //RAIN
    176: [Rainy], //"Patchy rain nearby", //RAIN
    113: [Sunny], //"Clear/Sunny", //SUNNY
};
