export interface IRoute {
    element: React.ReactElement;
    path: string;
}

export interface IDataSection {
    id: string;
}

export interface IResponseName {
    name: string;
}

export interface ICityDataParams {
    param: string;
    measure: string;
    value: string;
}

export interface ICityGeoInput {
    city: string;
}

export interface ICityCoord {
    lat: number;
    lon: number;
}

export interface ICityGeo extends ICityCoord {
    name: string;
    local_names?: Array<string>;
    country: string;
    state: string;
}

export type ICityGeoOutput = Array<ICityGeo>;

export interface ICityDataInput extends ICityCoord {}

export interface IWeather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface IWeatherMain {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
}

export interface IWind {
    speed: number;
    deg: number;
    gust?: number;
}

export interface IClouds {
    all: number;
}

export interface ISys {
    type: number;
    id: number;
    message: number;
    country: string;
    sunrise: number;
    sunset: number;
}

export interface ICityDataOutput {
    coord: ICityCoord;
    weather: Array<IWeather>;
    base: string;
    main: IWeatherMain;
    visibility: number;
    wind: IWind;
    clouds: IClouds;
    dt: number;
    sys: ISys;
    timezone: number;
    id: number;
    name: string;
    cod: number;
}

export interface ICityInput {
    city: string;
}

export interface ICityData extends ICityDataOutput {}

export interface ICityForecastInput extends ICityDataInput {}

export interface IForecastInput extends ICityInput {}

export interface IForecastMain extends IWeatherMain {
    grnd_level: number;
    sea_level: number;
    temp_kf: number;
}

export interface IForecastListItem{
    clouds: IClouds;
    dt: number;
    dt_txt: string;
    main: IForecastMain
    pop: number;
    sys: {pod: string;}
    visibility: number;
    weather: Array<IWeather>;
    wind: IWind;
    rain: {
        "3h": number;
    }
}

export interface ICityForecastOutput {
    city: {
        id: number;
        name: string;
        coord: ICityCoord;
        country: string;
        population: number;
        sunrise: number;
        sunset: number;
        timezone: number;
    }
    cnt: number;
    cod: string;
    message: number;
    list: Array<IForecastListItem>;
}

export interface IForecastOutput extends ICityForecastOutput{};