import { useSelector } from 'react-redux';

import { CardContent, Tooltip } from '@mui/material';

import { getLocalTime, IAppState, Paths, SharedComponents } from '@shared';

export const ForecastGeneralInformation = () => {
    const { cityData } = useSelector((state: IAppState) => state.cityData);
    const { cityGeo } = useSelector((state: IAppState) => state.cityGeo);

    if (!cityGeo.name) {
        return null;
    }
    const { name, sys, weather, main, dt, timezone } = cityData;
    return (
        <SharedComponents.CityDataContainer>
            <CardContent>
                <SharedComponents.CityCardNameText text={`${name}, ${sys.country}`} />
                <SharedComponents.CityCardSecondaryText text={`${getLocalTime(dt, timezone)}`} />
                <SharedComponents.GrigContainer>
                    <SharedComponents.CityCardMainText text={`${main.temp} °C`} />

                    <SharedComponents.WeatherIcon
                        icon={weather[0].icon}
                        title={weather[0].description}
                    />
                </SharedComponents.GrigContainer>
            </CardContent>
            <SharedComponents.ToListButton />
            <SharedComponents.ToFDetailesButton />
        </SharedComponents.CityDataContainer>
    );
};
