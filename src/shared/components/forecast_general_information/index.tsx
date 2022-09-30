import { useSelector } from 'react-redux';
import { CardContent } from '@mui/material';
import { CircularProgress } from '@mui/material';
import { IAppState, SharedComponents, SharedTypes } from '@shared';

export const ForecastGeneralInformation = ({ id }: SharedTypes.IDataSection) => {
    const { cityDataLoadingStatus, error } = useSelector((state: IAppState) => state.cityData);
    const { cityName } = useSelector((state: IAppState) => state.cityName);

    if (cityDataLoadingStatus === 'loading') {
        return <CircularProgress color="secondary" />;
    }

    if (error) {
        return <SharedComponents.WarningMessage text="Incorrect URL" />;
    }

    return (
        <SharedComponents.CityDataContainer>
            <CardContent>
                <SharedComponents.CityCardData />
            </CardContent>
            {cityName ? (
                <SharedComponents.ToListButton name={cityName} />
            ) : (
                <SharedComponents.ToHomePageButton />
            )}
            <SharedComponents.ToFDetailesButton id={id} />
        </SharedComponents.CityDataContainer>
    );
};
