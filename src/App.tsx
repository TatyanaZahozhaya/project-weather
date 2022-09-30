import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { InnerRoutes, SharedTypes, Theme, IAppState, Paths } from '@shared';
import { Home } from '@home';
import { PageLayout } from '@page_layout';
import { PageNotFound } from '@page_not_found';

function App() {
    const { theme } = useSelector((state: IAppState) => state.theme);
    const [activeTheme, setActiveTheme] = useState(Theme.light);

    useEffect(() => {
        if (theme === 'dark') {
            setActiveTheme(Theme.dark);
        } else {
            setActiveTheme(Theme.light);
        }
    }, [theme]);

    return (
        <>
            <ThemeProvider theme={activeTheme}>
                <CssBaseline />
                <Router>
                    <Routes>
                        <Route
                            path={Paths.HOME}
                            key={Paths.HOME}
                            element={<Home />}
                        />
                        <Route
                            path={Paths.PAGE_NOT_FOUND}
                            key={Paths.PAGE_NOT_FOUND}
                            element={<PageNotFound />}
                        />
                        <Route
                            key={Paths.PAGE_LAYOUT}
                            element={<PageLayout />}>
                            {InnerRoutes.map(renderRoutes)}
                        </Route>
                    </Routes>
                </Router>
            </ThemeProvider>
        </>
    );
}

const renderRoutes = ({ element, path }: SharedTypes.IRoute): React.ReactElement => {
    return (
        <Route
            element={element}
            path={path}
            key={path}
        />
    );
};

export default App;
