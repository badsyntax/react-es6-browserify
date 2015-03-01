import React from 'react';
import Router from 'react-router';
import {Header} from '../Header/Header.jsx';
import {Footer} from '../Footer/Footer.jsx';

var { RouteHandler } = Router;

export class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <RouteHandler />
        <Footer />
      </div>
    );
  }
}
