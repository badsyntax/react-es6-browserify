import React from 'react';
import Router from 'react-router';

var { Link } = Router;

export class Navigation extends React.Component {
  render() {
    return (
      <ul className={"Navigation"}>
        <li>
          <Link to="home">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
      </ul>
    );
  }
}
