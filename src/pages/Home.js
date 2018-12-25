import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  root: {
    padding: 15,
  },
});

/**
 * Home Component
 * @extends React.Component
 * @returns {React.Component} - Home component
 */
export class Home extends React.PureComponent {
  static propTypes = {
    classes: PropTypes.shape({}).isRequired,
  }

  /**
   * @inheritDoc
   */
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        still in home
      </div>
    );
  }
}

export default withStyles(styles)(Home);
