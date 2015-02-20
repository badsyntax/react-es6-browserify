import React from 'react';

class _Header {
  render() {
    return (
      <header>
        <h1>Example of React with es6 and browserify</h1>
      </header>
    );
  }
}
export const Header = React.createClass(_Header.prototype);
