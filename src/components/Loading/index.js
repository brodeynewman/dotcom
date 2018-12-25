import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LoadingComponent from '@material-ui/core/CircularProgress';

const styles = () => ({
  loading: {
    height: 100,
    position: 'fixed',
    left: '50%',
    right: '50%',
    top: '50%',
    bottom: '50%',
  },
});

const Loading = ({ classes }) => (
  <Loading classes={{ root: classes.loading }} />
);

Loading.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(LoadingComponent);
