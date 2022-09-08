import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { SharedComponents, SharedTypes, IAppState, Actions, useAppDispatch } from '@shared';
import { CircularProgress } from '@mui/material';

const renderCitiesListItem = (item: SharedTypes.ICityGeo) => {
    return (
        <SharedComponents.CitiesListItem
            key={`${item.lat}-${item.lon}`}
            {...item}
        />
    );
};

export const CitiesList = () => {
    const { cityName } = useSelector((state: IAppState) => state.cityName);
    const { citiesList, citiesListLoadingStatus, error } = useSelector((state: IAppState) => state.citiesList);

    const dispatch = useAppDispatch();
    const { fetchCitiesList } = Actions;

    useEffect(() => {
        if (cityName) {
            dispatch(fetchCitiesList(cityName));
        }
    }, [cityName, dispatch, fetchCitiesList]);

    if (citiesListLoadingStatus === 'loading') {
        return <CircularProgress color="secondary" />;
    }
    
    if (citiesList.length === 0) {
        return <SharedComponents.WarningMessage text="Please, enter city name" />;
    }

    if (error) {
        return <SharedComponents.WarningMessage text="Something is wrong... Please, try later" />;
    }
    
    return (
        <SharedComponents.ListElement>
            {citiesList.map(renderCitiesListItem)}
        </SharedComponents.ListElement>
    );
};
