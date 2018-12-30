import React from 'react';
import { withRouter } from 'react-router-dom';
import ArrowBack from '@material-ui/icons/ArrowBack';
import { withStyles } from '@material-ui/core';

const styles = () => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    bottom: 25,
    left: 35,
    color: '#666',
    background: 'transparent',
    border: 'none',
    '@media screen and (max-width: 550px)': {
      display: 'none',
    },
    cursor: 'pointer',
  },
});

/**
 * Handles the click of the back button
 * @param {function} push - history.push
 * @returns {void}
 */
function handleBackClick({ push }) {
  return () => push('/');
}

const Back = ({ history, classes }) => (
  <button
    type="button"
    onClick={handleBackClick(history)}
    className={classes.root}
  >
    <ArrowBack />
  </button>
);

export default withRouter(withStyles(styles)(Back));
