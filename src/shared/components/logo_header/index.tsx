import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import styled from '@emotion/styled';

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
    return (
        <Typography
            variant="h6"
            sx={{
                textDecoration: 'none',
                color: 'inherit',
                '@media (max-width:600px)': {
                    gridArea: '1/1/2/2',
                },
            }}>
            <LinkStyled to={href}>{text}</LinkStyled>
        </Typography>
    );
});
