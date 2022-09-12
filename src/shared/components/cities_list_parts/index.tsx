import { FC, memo } from 'react';
import { Link } from 'react-router-dom';

import { Grow, List, ListItem } from '@mui/material';
import styled from '@emotion/styled';

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
    to: string;
}

const LinkStyled = styled(Link)`
    display: flex;
    text-decoration: none;
    color: inherit;
    font-weight: bold;
`;

export const ListItemAsLink: FC<IListItemAsLink> = memo(({ children, onClick, to }) => {
    return (
        <ListItem onClick={onClick} >
            <LinkStyled to={to}>{children}</LinkStyled>
        </ListItem>
    );
});
