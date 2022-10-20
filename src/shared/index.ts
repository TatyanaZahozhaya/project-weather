export * as Actions from './store/slice';
export * as SharedComponents from './components';
export * as SharedTypes from './types';
export * as Theme from './theme';
export * as Hooks from './hooks';
export { store, persistor, Client, type IAppState, useAppDispatch } from './store';
export { Paths, InnerRoutes } from './routes';
export {
    getLocalTime,
    getLocalDay,
    getLocalHoursMinutes,
    createModyfiedArr,
    getCoordFromId,
} from './utils';
export { API } from './utils/api';
