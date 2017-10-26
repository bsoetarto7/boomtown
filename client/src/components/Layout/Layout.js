import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { Header } from '../../containers/Header';
import { FooterContainer } from '../../containers/Footer';
import './styles.css';

const Layout = ({ children }) => (
    <div className="appContentWrapper">

        
        <div className="appHeader">
            {/* Might want to put your header bar here... */}
            <Route exact path="/" component={Header} />
            <Route exact path="/share" component={Header} />
            <Route exact path="/profile/:profileID" component={Header} />
        </div>
        <div className="appContent">
            {children}
        </div>
        <Route exact path="/" component={FooterContainer} />
        <Route exact path="/profile/:profileID" component={FooterContainer} />
        {/* And a footer here, but not on the login route... */}
    </div>
);

Layout.defaultProps = {
    children: null
};

Layout.propTypes = {
    children: PropTypes.node
};

export default Layout;
