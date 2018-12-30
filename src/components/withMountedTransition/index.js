import React from 'react';
import { Transition } from 'react-transition-group';

/**
 * Tracks transition changes for wrapped component
 * @param {React.Component} ComposedComponent - the wrapped component
 * @returns {React.Component} - wrapper component
 */
const withMountedTransition = ComposedComponent => class extends React.Component {
  state = { isMounted: false };

  /**
   * Toggles isMounted after initial paint
   * @returns {void}
   */
  componentDidMount() {
    this.setState({ isMounted: true });
  }

  /**
   * @inheritDoc
   */
  render() {
    const { isMounted } = this.state;

    return (
      <Transition in={isMounted} timeout={1000}>
        {state => (
          <ComposedComponent transitionState={state} {...this.props} />
        )}
      </Transition>
    );
  }
};

export default withMountedTransition;
