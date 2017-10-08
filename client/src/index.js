import React from 'react';
import ReactDOM from 'react-dom';
import { 
    BrowserRouter as Router, 
    Route,
    Switch,
    Link,
    Redirect
  } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import muiTheme from './config/theme';

import Layout from './components/Layout';
import Login from './containers/Login';
import { ItemsCardContainer } from  './containers/Card';
import { ProfileContainer } from  './containers/Profile';

const Boomtown = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <Layout>
            <Router>
                <Switch>
                    {/* <Login /> */}
                    <Route exact path="/" component={ItemsCardContainer} />
                    <Route exact path="/profile/:profileID" component={ProfileContainer} />
                </Switch>
            </Router>
        </Layout>
    </MuiThemeProvider>

);

ReactDOM.render(<Boomtown />, document.getElementById('root'));
registerServiceWorker();
