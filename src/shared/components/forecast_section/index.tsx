import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';
import {
    Actions,
    IAppState,
    SharedComponents,
    SharedTypes,
    useAppDispatch,
    getCoordFromId,
} from '@shared';

export const ForecastSection = ({ id }: SharedTypes.IDataSection) => {
    const { cityForecast, cityForecastLoadingStatus, error } = useSelector(
        (state: IAppState) => state.cityForecast,
    );
    const dispatch = useAppDispatch();
    const { fetchCityForecast, fetchCityDetailedData } = Actions;
    const [lat, lon] = getCoordFromId(id);

    useEffect(() => {
        dispatch(fetchCityForecast({ lat: lat, lon: lon }));
        dispatch(fetchCityDetailedData({ lat: lat, lon: lon }));
    }, []);

    if (error) {
        return null;
    }

    if (cityForecastLoadingStatus === 'loading' || !cityForecast?.city?.name) {
        return <CircularProgress color="secondary" />;
    }

    return <SharedComponents.ForecastSectionData />;
};
