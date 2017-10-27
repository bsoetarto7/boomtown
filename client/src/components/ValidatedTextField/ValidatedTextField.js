import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

import { blueGrey900 } from 'material-ui/styles/colors';

const styles = {
    fieldStyle: {
        width: '100%'
    },
    errorStyle: {
        color: blueGrey900,
        position: 'absolute',
        bottom: '-0.42rem'
    },
    underlineStyle: {
        borderColor: blueGrey900
    }
};

export const ValidatedEmailTextField = field => (
    <TextField
        style={styles.fieldStyle}
        hintText="Email"
        id="loginEmail"
        type="email"
        errorStyle={styles.errorStyle}
        underlineFocusStyle={styles.underlineStyle}
        {...field.input}
    />
);

export const ValidatedPassTextField = field => (
    <TextField
        style={styles.fieldStyle}
        hintText="Password"
        id="loginPass"
        type="password"
        errorStyle={styles.errorStyle}
        underlineFocusStyle={styles.underlineStyle}
        {...field.input}
    />
);
