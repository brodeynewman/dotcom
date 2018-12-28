import React from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

import Back from '../components/Back';
import Loading from '../components/Loading';

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
});

/**
 * Contact page React Component
 * @returns {React.Component} the Contact page
 */
class Contact extends React.PureComponent {
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
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Back />
        <div className={classes.form}>
          <form onSubmit={this.handleSubmit}>
            <div className={classes.inputWrapper}>
              <Input
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
            <div>
              <Button
                variant="outlined"
                type="submit"
              >
                {isSubmitting ? <Loading size={20} /> : 'Submit'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Contact);
