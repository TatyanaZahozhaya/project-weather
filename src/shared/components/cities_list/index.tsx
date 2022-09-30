import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';
import { SharedComponents, SharedTypes, IAppState, Actions, useAppDispatch } from '@shared';

export const CitiesList = ({ name }: SharedTypes.IResponseName) => {
    const { citiesList, citiesListLoadingStatus, error } = useSelector(
        (state: IAppState) => state.citiesList,
    );
    const dispatch = useAppDispatch();
    const { fetchCitiesList } = Actions;

    useEffect(() => {
        dispatch(fetchCitiesList(name));
    }, [name, dispatch, fetchCitiesList]);

    if (citiesListLoadingStatus === 'loading') {
        return <CircularProgress color="secondary" />;
    }

    if (name && citiesList.length === 0) {
        return <SharedComponents.WarningMessage text="City not found. Please, check spelling" />;
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

const renderCitiesListItem = (item: SharedTypes.ICityGeo) => {
    return (
        <SharedComponents.CitiesListItem
            key={`${item.lat}-${item.lon}`}
            {...item}
        />
    );
};
