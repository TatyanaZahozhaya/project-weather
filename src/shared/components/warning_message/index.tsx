import { FC, memo } from 'react';

import { Card, Typography, useTheme } from '@mui/material';

interface IWarningMessage {
    text: string;
}
export const WarningMessage: FC<IWarningMessage> = memo(({ text }) => {
    const { spacing } = useTheme();
    return (
        <Card sx={{ minWidth: 275, textAlign: 'center', padding: `${spacing(2)}` }}>
            <Typography
                sx={{
                    color: 'warning.dark',
                }}
                variant="h5"
                component="div">
                {text}
            </Typography>
        </Card>
    );
});
