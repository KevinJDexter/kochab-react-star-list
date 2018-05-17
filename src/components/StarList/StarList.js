import React, { Component } from 'react';

class StarList extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <ul>
          {this.props.starList.map(star =>
            <li key={star.name}>
              The star {star.name} is {star.diameter} in diameter.
            </li>)}
        </ul>
    )
  }
}

export default StarList;