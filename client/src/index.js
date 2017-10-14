import React from 'react';
import ReactDOM from 'react-dom';
import configStore from './configStore';
import { Provider } from 'react-redux';
import { 
    BrowserRouter as Router, 
    Route,
    Switch
  } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import muiTheme from './config/theme';

import Layout from './components/Layout';
import Login from './containers/Login';
import { ItemsCardContainer } from  './containers/Card';
import { ProfileContainer } from  './containers/Profile';


const store = configStore();

const Boomtown = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <Router>
            <Layout>
                <Switch>
                    {/* <Login /> */}
                    <Route exact path="/" component={ItemsCardContainer} />
                    <Route exact path="/profile/:profileID" component={ProfileContainer} />
                </Switch>
            </Layout>
        </Router>
    </MuiThemeProvider>
);

ReactDOM.render(
<Provider store={store}>
  <Boomtown />
 </Provider>, document.getElementById('root'));
registerServiceWorker();
