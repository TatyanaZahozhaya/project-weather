import { SharedComponents } from '@shared';

export const ForecastSeveralDays = () => {
    return (
        <>
            <SharedComponents.ForecastGeneralInformation />
            <SharedComponents.ForecastEachDayInfo />
        </>
    );
};
