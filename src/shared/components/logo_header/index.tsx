import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import styled from '@emotion/styled';
import { useStyles } from './style';

interface ILogoHeader {
    href: string;
    text: string;
}

const LinkStyled = styled(Link)`
    text-decoration: none;
    color: inherit;
    font-weight: bold;
`;

export const LogoHeader: FC<ILogoHeader> = memo(({ href, text }) => {
    const { classes } = useStyles();
    return (
        <Typography
            variant="h6"
            className={classes.logoHeader}>
            <LinkStyled to={href}>{text}</LinkStyled>
        </Typography>
    );
});
