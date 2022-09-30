import { useParams } from 'react-router-dom';
import { SharedComponents } from '@shared';

export const DetailedData = () => {
    const { id } = useParams();

    if (!id) {
        return <SharedComponents.WarningMessage text="No city id" />;
    }
    return (
        <>
            <SharedComponents.CardContainer>
                <SharedComponents.CityCard id={id} />
            </SharedComponents.CardContainer>
            <SharedComponents.CardContainer>
                <SharedComponents.DetailsSection />
            </SharedComponents.CardContainer>
        </>
    );
};
