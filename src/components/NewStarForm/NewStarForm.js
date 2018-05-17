import React from 'react';

const NewStarForm = (props) => (
      <form onSubmit={props.addStar}>
        <input type="text" value={props.newStar.name} onChange={props.handleChange('name')} />
        <input type="text" value={props.newStar.diameter} onChange={props.handleChange('diameter')} />
        <input type="submit" value="Da Submit Budon" />
      </form>
      )

export default NewStarForm;