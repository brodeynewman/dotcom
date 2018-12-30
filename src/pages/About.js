import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { CSSTransition } from 'react-transition-group';

import Back from '../components/Back';
import withMountedTransition from '../components/withMountedTransition';

const styles = () => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    height: 'calc(100vh - 70px)',
    padding: 35,
    overflow: 'auto',
  },
  info: {
    paddingLeft: 10,
    maxWidth: 850,
    fontSize: '1.5rem',
    color: '#666',
    '@media screen and (max-width: 850px)': {
      fontSize: '1rem',
    },
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
    '@media screen and (max-width: 850px)': {
      fontSize: '1rem',
    },
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
    '@media screen and (max-width: 850px)': {
      fontSize: '1.5rem',
    },
  },
  mainInfo: {
    marginTop: 40,
  },
  secondaryInfo: {
    marginTop: 20,
  },
  name: {
    fontWeight: 800,
    fontSize: '2.1rem',
    marginRight: 10,
    color: '#111',
    '@media screen and (max-width: 550px)': {
      display: 'block',
    },
  },
});

/**
 * About page React Component
 * @returns {React.Component} the About page
 */
class About extends React.PureComponent {
  static propTypes = {
    classes: PropTypes.shape({}).isRequired,
    transitionState: PropTypes.string.isRequired,
  }

  /**
   * @inheritDoc
   */
  render() {
    const { classes, transitionState } = this.props;

    const shouldEnter = transitionState === 'entering' || transitionState === 'entered';

    return (
      <div className={classes.root}>
        <Back />
        <CSSTransition
          in={shouldEnter}
          timeout={200}
          classNames="fade"
          unmountOnExit
        >
          <div className={classes.info}>
            <div className={classes.intro}>
              <span className={classes.name}>Brodey Newman</span>
              is a software craftsman specializing in user interface development,
              cloud operations, and distributed systems engineering.
            </div>
            <div className={classes.mainInfo}>
              When not on his machine mindlessly typing away,
              you can find Brodey running, drinking craft beer at a local brewery,
              taking photos, or reading.
            </div>
            <div className={classes.secondaryInfo}>
              Professionaly,
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
        </CSSTransition>
      </div>
    );
  }
}

export default withMountedTransition(withStyles(styles)(About));
