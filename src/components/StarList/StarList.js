import React from 'react';

const StarList = (props) => (<ul>
  {props.starList.map(star =>
    <li key={star.name}>
      The star {star.name} is {star.diameter} in diameter.
            </li>)}
</ul>
)

export default StarList