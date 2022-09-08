import { FC, memo } from 'react';

import { AppBar, Toolbar } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface IAppBar {
    children?: React.ReactNode;
}

interface IToolbar extends IAppBar {}

export const AppBarHeader: FC<IAppBar> = memo(({ children }) => {
    return <AppBar position="fixed">{children}</AppBar>;
});

export const ToolbarHeader: FC<IToolbar> = memo(({ children }) => {
    return <Toolbar sx={{ justifyContent: 'right' }}>{children}</Toolbar>;
});

export const ToolbarHeaderWithSearchField: FC<IToolbar> = memo(({ children }) => {
    const { spacing } = useTheme();
    return (
        <Toolbar
            sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                justifyContent: 'space-between',
                gap: `${spacing(2)}`,
                '@media (max-width:600px)': {
                    gridTemplateColumns: '1fr 1fr',
                    gridTemplateRows: '0.5fr 1fr',
                    gap: '0',
                    pb: `${spacing(1)}`,
                },
            }}>
            {children}
        </Toolbar>
    );
});

export const AppBarFooter: FC<IAppBar> = memo(({ children }) => {
    return (
        <AppBar
            component="footer"
            position="relative"
            sx={{ top: 'auto', bottom: 0 }}>
            {children}
        </AppBar>
    );
});
