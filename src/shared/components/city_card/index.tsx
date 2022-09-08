import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import CardContent from '@mui/material/CardContent';

import { SharedComponents, Paths, IAppState, getLocalTime, Actions, useAppDispatch } from '@shared';
import { CircularProgress } from '@mui/material';

export const CityCard = () => {
    const { cityData, cityDataLoadingStatus, error } = useSelector(
        (state: IAppState) => state.cityData,
    );
    const { cityGeo } = useSelector((state: IAppState) => state.cityGeo);

    const dispatch = useAppDispatch();
    const { fetchCityDetailedData } = Actions;

    useEffect(() => {
        if (cityGeo.name) {
            const { lat, lon } = cityGeo;
            dispatch(fetchCityDetailedData({ lat: lat, lon: lon }));
        }
    }, []);

    if (!cityGeo.name) {
        return <SharedComponents.WarningMessage text="Please, enter city name" />;
    }

    if (cityDataLoadingStatus === 'loading' || !cityData.name) {
        return <CircularProgress color="secondary" />;
    }
    if (error) {
        return <SharedComponents.WarningMessage text="Something is wrong... Please, try later" />;
    }

    const { name, sys, weather, main, dt, timezone } = cityData;

    return (
        <SharedComponents.CityDataContainer>
            <CardContent>
                <SharedComponents.CityCardNameText text={`${name}, ${sys.country}`} />
                <SharedComponents.CityCardSecondaryText text={`${getLocalTime(dt, timezone)}`} />
                <SharedComponents.GrigContainer>
                    <SharedComponents.CityCardMainText text={`${main.temp} °C`} />
                    <SharedComponents.WeatherIcon icon={weather[0].icon} />
                </SharedComponents.GrigContainer>
                <SharedComponents.CityCardSecondaryText text={weather[0].description} />
                <SharedComponents.CityCardSecondaryText text={`feels like ${main.feels_like}`} />
            </CardContent>
            <SharedComponents.CityDataButton
                title="Forecast for 5 days"
                link={Paths.FORECAST_5_DAYS}
            />
        </SharedComponents.CityDataContainer>
    );
};

export const DetailedCityDataSection = () => {
    const { cityData, cityDataLoadingStatus } = useSelector((state: IAppState) => state.cityData);
    const { cityGeo } = useSelector((state: IAppState) => state.cityGeo);
    if (!cityGeo.name) {
        return null;
    }
    if (cityDataLoadingStatus === 'loading' || !cityData.name) {
        return <CircularProgress color="secondary" />;
    }
    const { main, wind, clouds } = cityData;
    return (
        <SharedComponents.DetailedCityDataContainer>
            <DetailedCityCard
                param="Atmospheric pressure,"
                measure="hPa"
                value={main.pressure}
            />
            <DetailedCityCard
                param="Humidity,"
                measure="%"
                value={main.humidity}
            />
            <DetailedCityCard
                param="Cloudiness,"
                measure="%"
                value={clouds.all}
            />
            <DetailedCityCard
                param="Wind speed,"
                measure="meter/sec"
                value={wind.speed}
            />
            {wind.gust ? (
                <DetailedCityCard
                    param="Wind gust,"
                    measure="meter/sec"
                    value={wind.gust}
                />
            ) : null}
        </SharedComponents.DetailedCityDataContainer>
    );
};

export const DetailedCityCard = ({ param, measure, value }: any) => {
    return (
        <SharedComponents.DetailedCardContainer>
            <SharedComponents.CityCardTitleText text={param} />
            <SharedComponents.CityCardSecondaryText text={measure} />
            <SharedComponents.CityCardSecondaryText text={value} />
        </SharedComponents.DetailedCardContainer>
    );
};
