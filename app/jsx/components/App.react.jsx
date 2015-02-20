import React from 'react';
import {Header} from './Header.react.jsx';
import {Body} from './Body.react.jsx';
import {Footer} from './Footer.react.jsx';

class _App {
  render() {
    return (
      <div className="container">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}
export const App = React.createClass(_App.prototype);
