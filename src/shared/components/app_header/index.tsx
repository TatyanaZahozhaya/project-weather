import { Box } from '@mui/material';

import { SharedComponents, Paths } from '@shared';

export const AppHeader = () => {
    return (
        <Box component='header'>
            <SharedComponents.AppBarHeader>
                <SharedComponents.ToolbarHeader>
                    <SharedComponents.ThemeToggler />
                </SharedComponents.ToolbarHeader>
            </SharedComponents.AppBarHeader>
        </Box>
    );
};

export const AppHeaderWithSearchField = () => {
    return (
        <Box component='header'>
            <SharedComponents.AppBarHeader>
                <SharedComponents.ToolbarHeaderWithSearchField>
                    <SharedComponents.LogoHeader
                        text="GoodWeather"
                        href={Paths.HOME}
                    />
                    <SharedComponents.SearchField />
                    <SharedComponents.ThemeToggler />
                </SharedComponents.ToolbarHeaderWithSearchField>
            </SharedComponents.AppBarHeader>
        </Box>
    );
};
