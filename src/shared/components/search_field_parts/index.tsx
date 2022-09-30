import { FC, memo } from 'react';
import { Box, TextField } from '@mui/material';

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
        return (
            <TextField
                type="search"
                id="filled-basic"
                variant="filled"
                size="small"
                sx={{
                    backgroundColor: 'white',
                }}
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
        return (
            <Box
                component="form"
                target={target}
                action={action}
                onSubmit={onSubmit}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    '@media (max-width:600px)': {
                        gridArea: '2/1/3/3',
                    },
                }}>
                {children}
            </Box>
        );
    },
);
