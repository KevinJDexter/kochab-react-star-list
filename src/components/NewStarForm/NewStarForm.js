import React, { Component } from 'react';

class NewStarForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.addStar}>
        <input type="text" value={this.props.newStar.name} onChange={this.props.handleChange('name')} />
        <input type="text" value={this.props.newStar.diameter} onChange={this.props.handleChange('diameter')} />
        <input type="submit" value="Da Submit Budon" />
      </form>
      )
  }
}

export default NewStarForm;