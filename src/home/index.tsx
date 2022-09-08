import { SharedComponents } from '@shared';

export const Home = () => {
    return (
        <SharedComponents.AppContainer>
            <SharedComponents.AppHeader />
            <SharedComponents.MainPartContainerHomePage>
                <SharedComponents.TitleHomePage text="GoodWeather" />
                <SharedComponents.SearchField />
            </SharedComponents.MainPartContainerHomePage>
            <SharedComponents.AppFooter />
        </SharedComponents.AppContainer>
    );
};
