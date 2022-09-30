import { Home } from '@home';
import { ResponseList } from '@response_list';
import { DetailedData } from '@detailed_data';
import { ForecastSeveralDays } from '@forecast_several_days';
import { PageNotFound } from '@page_not_found';
import { PageLayout } from '@page_layout';

import { SharedTypes } from '@shared';

export enum Paths {
    HOME = '/',
    PAGE_LAYOUT = '',
    RESPONSE_LIST = '/res',
    RESPONSE_LIST_DATA = '/res/:name',
    DETAILED_DATA = '/details',
    DETAILED_DATA_CITY = '/details/:id',
    FORECAST_SEVERAL_DAYS = '/forecast',
    FORECAST_SEVERAL_DAYS_CITY = '/forecast/:id',
    PAGE_NOT_FOUND = '*',
}


export const InnerRoutes: Array<SharedTypes.IRoute> = [
    {
        element: <ResponseList />,
        path: Paths.RESPONSE_LIST_DATA,
    },
    {
        element: <DetailedData />,
        path: Paths.DETAILED_DATA_CITY,
    },
    {
        element: <ForecastSeveralDays />,
        path: Paths.FORECAST_SEVERAL_DAYS_CITY,
    },
];

export const AppRoutes: Array<SharedTypes.IRoute> = [
    {
        element: <Home />,
        path: Paths.HOME,
    },
    {
        element: <PageLayout />,
        path: Paths.PAGE_LAYOUT,
    },
    {
        element: <ResponseList />,
        path: Paths.RESPONSE_LIST,
    },
    {
        element: <DetailedData />,
        path: Paths.DETAILED_DATA,
    },
    {
        element: <ForecastSeveralDays />,
        path: Paths.FORECAST_SEVERAL_DAYS,
    },
    {
        element: <PageNotFound />,
        path: Paths.PAGE_NOT_FOUND,
    },
];
