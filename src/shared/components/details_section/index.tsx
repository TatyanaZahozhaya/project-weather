import { useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';
import { SharedComponents, IAppState } from '@shared';

export const DetailsSection = () => {
    const { cityDataLoadingStatus, error } = useSelector((state: IAppState) => state.cityData);

    if (error) {
        return null;
    }
    if (cityDataLoadingStatus === 'loading') {
        return <CircularProgress color="secondary" />;
    }

    return <SharedComponents.DetailsSectionData />;
};
