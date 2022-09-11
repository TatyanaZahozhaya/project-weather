import { Avatar, ListItemAvatar, ListItemText } from '@mui/material';
import LocationCityIcon from '@mui/icons-material/LocationCity';

import { SharedComponents, SharedTypes, Paths, Actions, useAppDispatch } from '@shared';

export const CitiesListItem = (item: SharedTypes.ICityGeo) => {
    const dispatch = useAppDispatch();
    const { addCityGeo } = Actions;

    const getDetailedInfo = () => {
        dispatch(addCityGeo(item));
    };

    const {name, country, state } = item;

    return (
        <>
            <SharedComponents.ListItemAsLink
                href={Paths.DETAILED_DATA}
                onClick={getDetailedInfo}>
                <ListItemAvatar>
                    <Avatar>
                        <LocationCityIcon />
                    </Avatar>
                </ListItemAvatar>
                {state ? (
                    <ListItemText primary={`${name} - ${country} - ${state}`} />
                ) : (
                    <ListItemText primary={`${name} - ${country}`} />
                )}
            </SharedComponents.ListItemAsLink>
            <SharedComponents.ItemDevider />
        </>
    );
};
