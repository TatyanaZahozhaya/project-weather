import { Home } from '@home';
import { ResponseList } from '@response_list';
import { DetailedData } from '@detailed_data';
import { Forecast5Days } from '@forecast_5_days';
import { PageNotFound } from '@page_not_found';
import { PageLayout } from '@page_layout';

import { SharedTypes } from '@shared';

export enum Paths {
    HOME = '/',
    PAGE_LAYOUT = '',
    RESPONSE_LIST = '/res',
    DETAILED_DATA = '/detailes',
    FORECAST_5_DAYS = '/forecast',
    PAGE_NOT_FOUND = '*',
}

export const InnerRoutes: Array<SharedTypes.IRoute> = [
    {
        element: <ResponseList />,
        path: Paths.RESPONSE_LIST,
    },
    {
        element: <DetailedData />,
        path: Paths.DETAILED_DATA,
    },
    {
        element: <Forecast5Days />,
        path: Paths.FORECAST_5_DAYS,
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
        element: <Forecast5Days />,
        path: Paths.FORECAST_5_DAYS,
    },
    {
        element: <PageNotFound />,
        path: Paths.PAGE_NOT_FOUND,
    },
];
