import { FC, memo } from 'react';
import { AppBar, Toolbar } from '@mui/material';
import { useStyles } from './style';

interface IAppBar {
    children?: React.ReactNode;
    name?: string;
}
interface IToolbar extends IAppBar {}

export const AppBarHeader: FC<IAppBar> = memo(({ children }) => {
    return <AppBar position="fixed">{children}</AppBar>;
});

export const AppBarFooter: FC<IAppBar> = memo(({ children }) => {
    const { classes } = useStyles();
    return (
        <AppBar
            component="footer"
            position="relative"
            className={classes.appBarFooter}>
            {children}
        </AppBar>
    );
});

export const ToolbarHeader: FC<IToolbar> = memo(({ children }) => {
    const { classes } = useStyles();
    return <Toolbar className={classes.toolbarHeader}>{children}</Toolbar>;
});

export const ToolbarHeaderWithSearchField: FC<IToolbar> = memo(({ children }) => {
    const { classes } = useStyles();
    return <Toolbar className={classes.toolbarHeaderWithSearchField}>{children}</Toolbar>;
});
