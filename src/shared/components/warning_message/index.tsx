import { FC, memo } from 'react';
import { Card, Typography } from '@mui/material';
import { useStyles } from './style';

interface IWarningMessage {
    text: string;
}

export const WarningMessage: FC<IWarningMessage> = memo(({ text }) => {
    const { classes } = useStyles();

    return (
        <Card className={classes.warningMessageCard}>
            <Typography
                className={classes.warningMessageText}
                variant="h5"
                component="div">
                {text}
            </Typography>
        </Card>
    );
});
