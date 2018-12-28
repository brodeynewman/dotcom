import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

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
  },
  info: {
    paddingLeft: 10,
    maxWidth: 450,
    fontSize: '2rem',
    color: '#666',
  },
  bio: {
    paddingTop: 10,
    fontSize: '2rem',
    color: '#666',
  },
  passport: {
    borderBottom: '2px solid #bd93f9',
    marginLeft: 10,
    textDecoration: 'none',
    color: 'black',
    fontSize: '2rem',
    display: 'inline-block',
  },
  links: {
    position: 'fixed',
    bottom: 0,
    left: 35,
    padding: 0,
    marginTop: 50,
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
        <div>
          <span className={classes.name}>Brodey Newman</span>
          <span className={classes.info}>is a software engineer based out of Charlotte, NC.</span>
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

export default withStyles(styles)(Home);
