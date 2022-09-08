import { FC, memo } from 'react';

import { Typography } from '@mui/material';

interface ILogoHeader {
    href: string;
    text: string;
}

export const LogoHeader: FC<ILogoHeader> = memo(({ href, text }) => {
    return (
        <Typography
            component="a"
            href={href}
            variant="h6"
            sx={{
                textDecoration: 'none',
                color: 'inherit',
                '@media (max-width:600px)': {
                    gridArea: '1/1/2/2',
                },
            }}>
            {text}
        </Typography>
    );
});
