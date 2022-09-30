import { Avatar, ListItemAvatar, ListItemText } from '@mui/material';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import { SharedComponents, SharedTypes, Paths } from '@shared';

export const CitiesListItem = (item: SharedTypes.ICityGeo) => {
    const { name, country, state, lat, lon } = item;

    return (
        <>
            <SharedComponents.ListItemAsLink to={`${Paths.DETAILED_DATA}/${lat}-${lon}`}>
                <ListItemAvatar>
                    <Avatar>
                        <LocationCityIcon />
                    </Avatar>
                </ListItemAvatar>
                {state ? (
                    <ListItemText
                        sx={{ mt: 1 }}
                        primary={`${name} - ${country} - ${state}`}
                    />
                ) : (
                    <ListItemText
                        sx={{ mt: 1 }}
                        primary={`${name} - ${country}`}
                    />
                )}
            </SharedComponents.ListItemAsLink>
            <SharedComponents.ItemDevider />
        </>
    );
};
