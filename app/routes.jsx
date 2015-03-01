import React from 'react';
import Router from 'react-router';

import {App} from './components/App/App.jsx';
import {HomePage} from './components/HomePage/HomePage.jsx';
import {AboutPage} from './components/AboutPage/AboutPage.jsx';
import {NotFoundPage} from './components/NotFoundPage/NotFoundPage.jsx';

var {
  Route,
  DefaultRoute,
  NotFoundRoute
} = Router;

export var routes = (
  <Route handler={App} path="/">
    <DefaultRoute handler={HomePage} />
    <Route name="home" handler={HomePage} path="/" />
    <Route name="about" handler={AboutPage} path="/about" />
    <NotFoundRoute handler={NotFoundPage}/>
  </Route>
);;
