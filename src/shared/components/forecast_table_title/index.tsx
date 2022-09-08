import { FC, memo } from "react";
import { TableCell, TableHead, TableRow } from '@mui/material';

interface IForecastTableTitle {
    date: string;
}
export const ForecastTableTitle: FC<IForecastTableTitle> = memo(({ date }) => {
    return (
        <TableHead>
            <TableRow>
                <TableCell
                    align="center"
                    colSpan={3}>
                    {date}
                </TableCell>
            </TableRow>
        </TableHead>
    );
});