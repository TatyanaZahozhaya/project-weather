import { useParams } from 'react-router-dom';
import { SharedComponents } from '@shared';

export const ForecastSeveralDays = () => {
    const { id } = useParams();

    if (!id) {
        return <SharedComponents.WarningMessage text="No city id" />;
    }
    return (
        <>
            <SharedComponents.ForecastGeneralInformation id={id} />
            <SharedComponents.ForecastSection id={id} />
        </>
    );
};
