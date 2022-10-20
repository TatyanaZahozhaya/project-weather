import { Avatar, ListItemAvatar } from '@mui/material';
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
                    <SharedComponents.CitiesListText
                        name={name}
                        country={country}
                        state={state}
                    />
                ) : (
                    <SharedComponents.CitiesListText
                        name={name}
                        country={country}
                    />
                )}
            </SharedComponents.ListItemAsLink>
            <SharedComponents.ItemDevider />
        </>
    );
};
