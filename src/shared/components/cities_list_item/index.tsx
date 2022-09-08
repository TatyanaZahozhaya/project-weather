import { Avatar, ListItemAvatar, ListItemText } from '@mui/material';
import LocationCityIcon from '@mui/icons-material/LocationCity';

import { SharedComponents, SharedTypes, Paths, Actions, useAppDispatch } from '@shared';

export const CitiesListItem = (item: SharedTypes.ICityGeo) => {
    const dispatch = useAppDispatch();
    const { cityGeoAdded } = Actions;

    const getDetailedInfo = () => {
        dispatch(cityGeoAdded(item));
    };

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
                {item.state ? (
                    <ListItemText primary={`${item.name} - ${item.country} - ${item.state}`} />
                ) : (
                    <ListItemText primary={`${item.name} - ${item.country}`} />
                )}
            </SharedComponents.ListItemAsLink>
            <SharedComponents.ItemDevider />
        </>
    );
};
