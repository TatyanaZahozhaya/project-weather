import { useSelector } from 'react-redux';
import { SharedComponents, IAppState, Hooks } from '@shared';

export const CityCardData = () => {
    const { cityData } = useSelector((state: IAppState) => state.cityData);
    const [name, country, date, temp, fellsLike, icon, description] =
        Hooks.useCityCardParams(cityData);

        if (!cityData) {
            return <div>loading</div>
        }

    return (
        <>
            <SharedComponents.CityCardNameText text={`${name}, ${country}`} />
            <SharedComponents.CityCardSecondaryText text={date} />
            <SharedComponents.GrigContainer>
                <SharedComponents.CityCardMainText text={`${temp} °C`} />
                <SharedComponents.WeatherIcon
                    icon={icon}
                    title={description}
                />
            </SharedComponents.GrigContainer>
            <SharedComponents.CityCardSecondaryText text={description} />
            <SharedComponents.CityCardSecondaryText text={`feels like ${fellsLike}`} />
        </>
    );
};
