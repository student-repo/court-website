import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import PageApp from './components/page-app';
import injectTapEventPlugin from "react-tap-event-plugin";

injectTapEventPlugin();

ReactDOM.render(
    <MuiThemeProvider muiTheme={getMuiTheme()} >
        <PageApp />
        </MuiThemeProvider>,
    document.getElementById('root')
);
