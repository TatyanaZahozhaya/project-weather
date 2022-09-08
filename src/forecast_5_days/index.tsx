import { SharedComponents } from '@shared';

export const Forecast5Days = () => {
    return (
        <>
            <SharedComponents.ForecastGeneralInformation />
            <SharedComponents.ForecastEachDayInfo />
        </>
    );
};
