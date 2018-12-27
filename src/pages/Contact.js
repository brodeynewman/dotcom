import React from 'react';
import Back from '../components/Back';

/**
 * Contact page React Component
 * @returns {React.Component} the Contact page
 */
class Contact extends React.PureComponent {
  state = {};

  /**
   * @inheritDoc
   */
  render() {
    return (
      <div>
        <Back />
        This is the Contact page
      </div>
    );
  }
}

export default Contact;
