import React, { Component } from 'react';

class NewStar extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
        <p>
          {this.props.newStar.name} has a diameter of {this.props.newStar.diameter}
          {/* The first item in the array is: {this.state.starList[0]} */}
        </p>
    );
  }
}

export default NewStar;
