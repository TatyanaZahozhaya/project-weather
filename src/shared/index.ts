export * as Actions from './store/slice';
export * as SharedComponents from './components';
export * as SharedTypes from './types';
export * as Theme from './theme';
export {store, persistor, Client, type IAppState, useAppDispatch} from './store';
export { Paths, InnerRoutes } from './routes';
export { getLocalTime, getLocalDate, getLocalDay, getLocalHoursMinutes, createModyfiedArr  } from './utils';