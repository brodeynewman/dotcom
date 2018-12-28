import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Back from '../components/Back';

const styles = () => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    height: 'calc(100vh - 70px)',
    padding: 35,
  },
  info: {
    paddingLeft: 10,
    maxWidth: 850,
    fontSize: '1.5rem',
    color: '#666',
  },
  tools: {
    padding: 0,
  },
  tool: {
    marginLeft: 10,
    '&:first-child': {
      marginLeft: 0,
    },
    fontSize: '.95rem',
    display: 'inline-block',
  },
  toolsHeader: {
    marginTop: 25,
    fontSize: '1.3rem',
  },
  toolOne: {
    color: '#76CEDE',
  },
  toolTwo: {
    color: '#73A964',
  },
  toolThree: {
    color: '#60DAFB',
  },
  toolFour: {
    color: '#F58D0F',
  },
  toolFive: {
    color: '#089CEB',
  },
  intro: {
    fontSize: '2rem',
  },
  mainInfo: {
    marginTop: 40,
  },
  name: {
    fontWeight: 800,
    fontSize: '2.1rem',
    marginRight: 10,
    color: '#111',
  },
});

/**
 * About page React Component
 * @returns {React.Component} the About page
 */
class About extends React.PureComponent {
  static propTypes = {
    classes: PropTypes.shape({}).isRequired,
  }

  state = {};

  /**
   * @inheritDoc
   */
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Back />
        <div className={classes.info}>
          <div className={classes.intro}>
            <span className={classes.name}>Brodey Newman</span>
            is an software craftsman specializing in user interface development,
            cloud operations, and distributed systems engineering.
          </div>
          <div className={classes.mainInfo}>
            Brodey has worked for companies ranging from small and medium-sized startups,
            to fortune 10 organizations.
          </div>
          <div className={classes.toolsHeader}>His primary tools include:</div>
          <ul className={classes.tools}>
            <li className={`${classes.tool} ${classes.toolOne}`}>Go,</li>
            <li className={`${classes.tool} ${classes.toolTwo}`}>Node,</li>
            <li className={`${classes.tool} ${classes.toolFour}`}>AWS,</li>
            <li className={`${classes.tool} ${classes.toolThree}`}>React,</li>
            <li className={`${classes.tool} ${classes.toolFive}`}>Docker</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(About);
