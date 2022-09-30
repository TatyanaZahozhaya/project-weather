import { useSelector } from 'react-redux';
import { Table, TableBody } from '@mui/material';
import { IAppState, SharedComponents, getLocalDay, SharedTypes, Hooks } from '@shared';

export const ForecastSectionData = () => {
    const { timezone } = useSelector((state: IAppState) => state.cityData.cityData);
    const { cityForecast } = useSelector((state: IAppState) => state.cityForecast);
    const modyfiedArr = Hooks.useFilteredForecastList(cityForecast, timezone);

    return <>{modyfiedArr.map(renderDailyForecast(timezone))}</>;
};

const renderDailyForecast = (timezone: number) => (item: Array<SharedTypes.IForecastListItem>) => {
    const date = item.length ? item[0].dt : 0;

    return (
        <SharedComponents.CityDataContainer key={date}>
            <Table aria-label="daily forecast">
                <SharedComponents.ForecastTableTitle date={`${getLocalDay(date, timezone)}`} />
                <TableBody>{item.map(renderTableRow(timezone))}</TableBody>
            </Table>
        </SharedComponents.CityDataContainer>
    );
};

const renderTableRow = (timezone: number) => (row: SharedTypes.IForecastListItem) => {
    const date = row ? row.dt : 0;
    const temp = row && row.main ? row.main.temp : 0;
    const icon = row && row.weather.length ? row.weather[0].icon : '-';
    const description = row && row.weather.length ? row.weather[0].description : '-';

    return (
        <SharedComponents.ForecastTableRow
            key={date}
            dt={date}
            temp={temp}
            icon={icon}
            description={description}
            timezone={timezone}
        />
    );
};
