import { FC, memo } from 'react';

import { Grow, List, ListItem } from '@mui/material';

interface IListElement {
    children?: React.ReactNode;
}
export const ListElement: FC<IListElement> = memo(({ children }) => {
    return (
        <Grow
            in={true}
            {...{ timeout: 800 }}>
            <List
                sx={{
                    width: '100%',
                    maxWidth: 360,
                    bgcolor: 'background.paper',
                }}>
                {children}
            </List>
        </Grow>
    );
});

interface IListItemAsLink {
    children?: React.ReactNode;
    onClick(e: React.MouseEvent): void;
    href?: string;
}

export const ListItemAsLink: FC<IListItemAsLink> = memo(({ children, onClick, href }) => {
    return (
        <ListItem
            component="a"
            onClick={onClick}
            href={href}>
            {children}
        </ListItem>
    );
});
