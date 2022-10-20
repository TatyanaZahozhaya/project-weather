import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import CardContent from '@mui/material/CardContent';
import { CircularProgress } from '@mui/material';
import {
    SharedComponents,
    IAppState,
    Actions,
    useAppDispatch,
    SharedTypes,
    getCoordFromId,
} from '@shared';

export const CityCard = ({ id }: SharedTypes.IDataSection) => {
    const { fetchCityDetailedData } = Actions;
    const { cityDataLoadingStatus, error } = useSelector((state: IAppState) => state.cityData);
    const { cityName } = useSelector((state: IAppState) => state.cityName);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const [lat, lon] = getCoordFromId(id);
        dispatch(fetchCityDetailedData({ lat: lat, lon: lon }));
    }, []);

    if (cityDataLoadingStatus === 'loading') {
        return <CircularProgress color="secondary" />;
    }
    if (error) {
        return <SharedComponents.WarningMessage text="Incorrect URL" />;
    }

    return (
        <SharedComponents.CityDataContainer>
            <CardContent>
                <SharedComponents.CityCardData />
            </CardContent>
            {cityName ? (
                <SharedComponents.ToListButton name={`${cityName}`} />
            ) : (
                <SharedComponents.ToHomePageButton />
            )}
            <SharedComponents.ToForecastButton id={id} />
        </SharedComponents.CityDataContainer>
    );
};
