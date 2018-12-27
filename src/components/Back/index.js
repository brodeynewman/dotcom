import React from 'react';
import { withRouter } from 'react-router-dom';
import ArrowBack from '@material-ui/icons/ArrowBack';
import { withStyles } from '@material-ui/core';

const styles = () => ({
  root: {
    position: 'fixed',
    top: 35,
    left: 35,
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
