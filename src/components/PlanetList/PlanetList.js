import React from 'react';

const PlanetList = (props) => (
  <ul>
    {props.planetList.map(planet => (
      <li key={planet.name}>
        The planet {planet.name} is {planet.diameter} in diameter.
            </li>))}
  </ul>
)

export default PlanetList;  