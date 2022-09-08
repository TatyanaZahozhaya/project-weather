import { SharedComponents } from '@shared';
import { Outlet } from 'react-router-dom';

export const PageLayout = () => {
    return (
        <SharedComponents.AppContainer>
            <SharedComponents.AppHeaderWithSearchField />
            <SharedComponents.MainPartContainer>
                <Outlet />
            </SharedComponents.MainPartContainer>
            <SharedComponents.AppFooter />
        </SharedComponents.AppContainer>
    );
};
