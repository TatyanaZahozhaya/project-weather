import { useSelector } from 'react-redux';

import { CardContent } from '@mui/material';

import { getLocalTime, IAppState, Paths, SharedComponents } from '@shared';

export const ForecastGeneralInformation = () => {
    const { cityData } = useSelector((state: IAppState) => state.cityData);
    const { cityGeo } = useSelector((state: IAppState) => state.cityGeo);

    if (!cityGeo.name) {
        return null
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
            </CardContent>
            <SharedComponents.CityDataButton
                title="current data"
                link={Paths.DETAILED_DATA}
            />
        </SharedComponents.CityDataContainer>
    );
};

