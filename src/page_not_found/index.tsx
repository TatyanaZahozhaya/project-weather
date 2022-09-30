import { Typography } from '@mui/material';
import { SharedComponents, Paths } from '@shared';

export const PageNotFound = () => {
    return (
        <SharedComponents.AppContainer>
            <SharedComponents.AppHeader />
            <SharedComponents.MainPartContainer>
                <Typography variant="h3">Page not found</Typography>
                <SharedComponents.CityDataContainer>
                    <SharedComponents.LogoHeader
                        text="GoodWeather"
                        href={Paths.HOME}
                    />
                </SharedComponents.CityDataContainer>
            </SharedComponents.MainPartContainer>
            <SharedComponents.AppFooter />
        </SharedComponents.AppContainer>
    );
};
