import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import { Grow, List, ListItem } from '@mui/material';
import styled from '@emotion/styled';
import { useStyles } from './style';

interface IListElement {
    children?: React.ReactNode;
}

export const ListElement: FC<IListElement> = memo(({ children }) => {
    const { classes } = useStyles();
    return (
        <Grow
            in={true}
            {...{ timeout: 800 }}>
            <List className={classes.listElement}>{children}</List>
        </Grow>
    );
});

interface IListItemAsLink {
    children?: React.ReactNode;
    onClick?(e: React.MouseEvent): void;
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
        <ListItem onClick={onClick}>
            <LinkStyled to={to}>{children}</LinkStyled>
        </ListItem>
    );
});
