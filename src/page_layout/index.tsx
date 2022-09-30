import { Outlet } from 'react-router-dom';
import { SharedComponents } from '@shared';

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
