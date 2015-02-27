import React from 'react';
import {Header} from './Header.jsx';
import {Body} from './Body.jsx';
import {Footer} from './Footer.jsx';

export class App extends React.Component {
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
