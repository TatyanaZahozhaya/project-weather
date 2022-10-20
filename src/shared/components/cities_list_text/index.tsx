import { FC, memo } from 'react';
import { ListItemText } from '@mui/material';

interface ICityListText {
    name: string;
    country: string;
    state?: string;
}

export const CitiesListText: FC<ICityListText> = memo(({ name, country, state }) => {
    return (
        <ListItemText
            sx={{ mt: 1 }}
            primary={`${name} - ${country} - ${state}`}
        />
    );
});
