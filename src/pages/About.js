import React from 'react';
import Back from '../components/Back';

/**
 * About page React Component
 * @returns {React.Component} the About page
 */
class About extends React.PureComponent {
  state = {};

  /**
   * @inheritDoc
   */
  render() {
    return (
      <div>
        <Back />
        This is the about page
      </div>
    );
  }
}

export default About;
