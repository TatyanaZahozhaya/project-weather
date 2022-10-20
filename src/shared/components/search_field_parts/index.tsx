import { FC, memo } from 'react';
import { Box, TextField } from '@mui/material';
import { useStyles } from './style';

interface IInputSearchField {
    label: string;
    ariaLabel: string;
    value: string;
    onChange?(e: React.ChangeEvent): void;
}

interface IFormSearchField {
    children: React.ReactNode;
    onSubmit?(e: React.FormEvent): void;
    target?: string;
    action?: string;
}

export const InputSearchField: FC<IInputSearchField> = memo(
    ({ label, ariaLabel, value, onChange }) => {
        const { classes } = useStyles();
        return (
            <TextField
                type="search"
                id="filled-basic"
                variant="filled"
                size="small"
                className={classes.inputSearchField}
                label={label}
                onChange={onChange}
                aria-label={ariaLabel}
                value={value}
            />
        );
    },
);

export const FormSearchField: FC<IFormSearchField> = memo(
    ({ children, onSubmit, target, action }) => {
        const { classes } = useStyles();
        return (
            <Box
                component="form"
                target={target}
                action={action}
                onSubmit={onSubmit}
                className={classes.formSearchField}>
                {children}
            </Box>
        );
    },
);
