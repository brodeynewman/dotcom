import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { CSSTransition } from 'react-transition-group';

import withMountedTransition from '../components/withMountedTransition';

const styles = () => ({
  root: {
    padding: 35,
    display: 'flex',
    alignItems: 'center',
    height: 'calc(100vh - 70px)',
  },
  name: {
    fontWeight: 800,
    fontSize: 35,
    '@media screen and (max-width: 850px)': {
      fontSize: '2rem',
      display: 'block',
    },
  },
  info: {
    paddingLeft: 10,
    maxWidth: 450,
    fontSize: '2rem',
    color: '#666',
    '@media screen and (max-width: 850px)': {
      fontSize: '1.5rem',
      paddingLeft: 0,
    },
  },
  bio: {
    paddingTop: 10,
    fontSize: '2rem',
    color: '#666',
    '@media screen and (max-width: 850px)': {
      fontSize: '1.25rem',
    },
  },
  passport: {
    borderBottom: '2px solid #bd93f9',
    marginLeft: 10,
    textDecoration: 'none',
    color: 'black',
    fontSize: '2rem',
    display: 'inline-block',
    '@media screen and (max-width: 850px)': {
      fontSize: '1.25rem',
      marginLeft: 8,
    },
  },
  links: {
    position: 'fixed',
    bottom: 0,
    left: 35,
    padding: 0,
    marginTop: 50,
    '@media screen and (max-width: 550px)': {
      display: 'flex',
      justifyContent: 'space-around',
      width: '75%',
      left: '50%',
      marginLeft: '-37.5%',
    },
  },
  link: {
    textAlign: 'center',
    display: 'inline-block',
    padding: 10,
    marginLeft: 15,
    color: '#bbb',
    cursor: 'pointer',
    '&:hover': {
      color: 'black',
    },
    textDecoration: 'none',
    '@media screen and (max-width: 850px)': {
      margin: 0,
    },
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
        <div>
          <CSSTransition
            in={shouldEnter}
            timeout={200}
            classNames="fade"
            unmountOnExit
          >
            <div>
              <span className={classes.name}>Brodey Newman</span>
              <span className={classes.info}>
                is a software engineer based out of Charlotte, NC.
              </span>
              <div className={classes.bio}>
                Currently working at
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="http://passportinc.com"
                  className={classes.passport}
                >
                    Passport Inc
                </a>
                .
              </div>
            </div>
          </CSSTransition>
          <ul className={classes.links}>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="http://github.com/brodeynewman"
              className={classes.link}
            >
              my work
            </a>
            <Link to="/about" className={classes.link}>about me</Link>
            <Link to="/contact" className={classes.link}>get in touch</Link>
          </ul>
        </div>
      </div>
    );
  }
}

export default withMountedTransition(withStyles(styles)(Home));
