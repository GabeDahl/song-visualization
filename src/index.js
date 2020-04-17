import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import Layout from './components/Layout';
import  './index.css'
import { ThemeProvider, createMuiTheme } from '@material-ui/core';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#1ED760'
        },
        secondary: {
            main: '#f1f1f1'
        }
    }
})

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <Layout />
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
);
