export interface Current {
    interval: Number;
    precipitation: Number;
    relative_humidity_2m: Number;
    temperature_2m: Number;
    time: String;
    wind_direction_10m: Number;
    wind_speed_10m: Number;
}

export interface CurrentUnits {
    interval: String;
    precipitation: String;
    relative_humidity_2m: String;
    temperature_2m: String;
    time: String;
    wind_direction_10m: String;
    wind_speed_10m: String;
}

export interface Daily {
    precipitation_sum: [];
    temperature_2m_max: [];
    time: [],
    wind_direction_10m_dominant: [];
    wind_speed_10m_max: [];
}

export interface DailyUnits {
    precipitation_sum: String;
    temperature_2m_max: String;
    time: String,
    wind_direction_10m_dominant: String;
    wind_speed_10m_max: String;
}

export interface Weather {
    current: Current;
    current_units: any;
    daily: Daily;
    daily_units: DailyUnits;
    elevation: Number;
    generationtime_ms: Number;
    latitude: Number;
    longitude: Number;
    timezone: String;
    timezone_abbreviation: String;
    utc_offset_seconds: Number;
}

export interface DailyWeatherConditions {
    key: String,
    displayName: String,
    image: String,
}

export interface WeatherConditions {
    key: String,
    displayName: String,
    image: String,
    class: String
}