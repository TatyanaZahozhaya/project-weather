import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { CircularProgress, Table, TableBody } from '@mui/material';

import { useAppDispatch } from '@shared';

import {
    Actions,
    IAppState,
    SharedComponents,
    getLocalDay,
    getLocalDate,
    createModyfiedArr,
} from '@shared';

export const ForecastEachDayInfo = () => {
    const { cityGeo } = useSelector((state: IAppState) => state.cityGeo);
    const { timezone } = useSelector((state: IAppState) => state.cityData.cityData);
    const { cityForecast, cityForecastLoadingStatus, error } = useSelector(
        (state: IAppState) => state.cityForecast,
    );

    const dispatch = useAppDispatch();
    const { fetchCityForecast5Days } = Actions;

    useEffect(() => {
        if (cityGeo.name) {
            const { lat, lon } = cityGeo;
            dispatch(fetchCityForecast5Days({ lat: lat, lon: lon }));
        }
    }, []);

    if (error) {
        return <SharedComponents.WarningMessage text="Something is wrong... Please, try later" />;
    }

    if (!cityGeo.name) {
        return <SharedComponents.WarningMessage text="Please, enter city name" />;
    }

    if (cityForecastLoadingStatus === 'loading' || !cityForecast?.city?.name) {
        return <CircularProgress color="secondary" />;
    }

    const dateForFilter = +getLocalDate(cityForecast.list[0].dt, timezone); //вырезаем только дату по местному времени, чтобы правильно разбить на массивы

    const modyfiedArr = createModyfiedArr(cityForecast.list, timezone, dateForFilter);

    return (
        <>
            {modyfiedArr.map((item) => (
                <SharedComponents.CityDataContainer key={item[0].dt}>
                    <Table aria-label="daily forecast">
                        <SharedComponents.ForecastTableTitle
                            date={`${getLocalDay(item[0].dt, timezone)}`}
                        />
                        <TableBody>
                            {item.map((row) => (
                                <SharedComponents.ForecastTableRow
                                    key={row.dt}
                                    dt={row.dt}
                                    temp={row.main.temp}
                                    icon={row.weather[0].icon}
                                    description={row.weather[0].description}
                                    timezone={timezone}
                                />
                            ))}
                        </TableBody>
                    </Table>
                </SharedComponents.CityDataContainer>
            ))}
        </>
    );
};
