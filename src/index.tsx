import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import reportWebVitals from './reportWebVitals';
import { store, persistor } from '@shared';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <PersistGate persistor={persistor}>
            <ReduxProvider store={store}>
                <App />
            </ReduxProvider>
        </PersistGate>
    </React.StrictMode>,
);

reportWebVitals();
