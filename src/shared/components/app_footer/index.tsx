import { Box, Toolbar } from '@mui/material';
import { SharedComponents } from '@shared';

export const AppFooter = () => {
    return (
        <Box component="footer">
            <SharedComponents.AppBarFooter>
                <Toolbar>2022 GoodWeather</Toolbar>
            </SharedComponents.AppBarFooter>
        </Box>
    );
};
