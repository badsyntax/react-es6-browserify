import React from 'react';

export class Body extends React.Component {

  getClassName() {
    return 'foo';
  }

  render() {
    var x = 'x';

    return (
      <div className={`${x} ${this.getClassName()} bar`}>
        Hello there!
      </div>
    );
  }
}
