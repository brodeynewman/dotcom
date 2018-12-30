import React from 'react';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { CSSTransition } from 'react-transition-group';

import Back from '../components/Back';
import Loading from '../components/Loading';
import withMountedTransition from '../components/withMountedTransition';

const styles = () => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    height: 'calc(100vh - 70px)',
    padding: 35,
  },
  form: {
    maxWidth: 550,
    padding: 15,
    width: '100%',
  },
  inputWrapper: {
    width: '100%',
    margin: '25px 0',
  },
  input: {
    width: '100%',
  },
  learnMore: {
    fontSize: '1.55rem',
    color: '#666',
    fontWeight: 400,
    '@media screen and (max-width: 850px)': {
      fontSize: '1rem',
    },
  },
  you: {
    paddingLeft: 8,
    fontWeight: '600',
    color: '#111',
    '@media screen and (max-width: 850px)': {
      paddingLeft: 4,
    },
  },
  submit: {
    marginTop: 30,
  },
});

/**
 * Contact page React Component
 * @returns {React.Component} the Contact page
 */
class Contact extends React.PureComponent {
  static propTypes = {
    classes: PropTypes.shape({}).isRequired,
    transitionState: PropTypes.string.isRequired,
  }

  state = {
    isSubmitting: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ isSubmitting: true });

    setTimeout(() => {
      this.setState({ isSubmitting: false });
    }, 1500);
  }

  /**
   * @inheritDoc
   */
  render() {
    const { isSubmitting } = this.state;
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
          <div className={classes.form}>
            <div>
              <h1 className={classes.learnMore}>
                Let me learn more about
                <span className={classes.you}>
                  you
                </span>
                .
              </h1>
            </div>
            <form onSubmit={this.handleSubmit}>
              <div className={classes.inputWrapper}>
                <Input
                  classes={{
                    underline: classes.underline,
                  }}
                  required
                  className={classes.input}
                  placeholder="Name"
                />
              </div>
              <div className={classes.inputWrapper}>
                <Input
                  required
                  className={classes.input}
                  placeholder="Email"
                  type="email"
                />
              </div>
              <div className={classes.inputWrapper}>
                <TextField
                  required
                  className={classes.input}
                  placeholder="Tell me something"
                />
              </div>
              <div className={classes.submit}>
                <Button
                  variant="outlined"
                  type="submit"
                >
                  {isSubmitting ? <Loading size={20} /> : 'Submit'}
                </Button>
              </div>
            </form>
          </div>
        </CSSTransition>
      </div>
    );
  }
}

export default withMountedTransition(withStyles(styles)(Contact));
