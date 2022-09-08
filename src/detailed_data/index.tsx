import { SharedComponents } from '@shared';

export const DetailedData = () => {
    return (
        <>
            <SharedComponents.CardContainer>
                <SharedComponents.CityCard />
            </SharedComponents.CardContainer>
            <SharedComponents.CardContainer>
                <SharedComponents.DetailedCityDataSection />
            </SharedComponents.CardContainer>
        </>
    );
};
