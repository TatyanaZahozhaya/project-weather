import { useSelector } from 'react-redux';
import { SharedComponents, SharedTypes, IAppState, Hooks } from '@shared';

export const DetailsSectionData = () => {
    const { cityData } = useSelector((state: IAppState) => state.cityData);
    const cityDataList = Hooks.useCityDataList(cityData);

    return (
        <SharedComponents.DetailedCityDataContainer>
            {cityDataList.map(renderCityCard)}
        </SharedComponents.DetailedCityDataContainer>
    );
};

const renderCityCard = ({ param, measure, value }: SharedTypes.ICityDataParams) => {
    return (
        <SharedComponents.DetailedCardContainer key={param}>
            <SharedComponents.CityCardTitleText text={param} />
            <SharedComponents.CityCardSecondaryText text={measure} />
            <SharedComponents.CityCardSecondaryText text={value} />
        </SharedComponents.DetailedCardContainer>
    );
};
