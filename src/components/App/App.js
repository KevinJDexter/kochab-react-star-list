import React, { Component } from 'react';
import axios from 'axios';

import Introduction from '../Introduction/Introduction';
import NewStar from '../NewStar/NewStar'
import StarList from '../StarList/StarList';
import NewStarForm from '../NewStarForm/NewStarForm';
import PlanetList from '../PlanetList/PlanetList';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      starList: [
        {
          name: 'Menkar',
          diameter: '42 suns'
        },
        {
          name: 'Kochab',
          diameter: '89 suns'
        },
        {
          name: 'Hadar',
          diameter: '8.6 suns'
        }
      ],
      newStar: {
        name: '',
        diameter: '',
      },
      planetList: []
    }
  }

  addStar = event => {
    event.preventDefault();
    this.setState({
      starList: [
        ...this.state.starList,
        this.state.newStar
      ],
      newStar: {
        name: '',
        diameter: ''
      }
    });
  };

  handleChange = property => event => {
    this.setState({
      newStar: {
        ...this.state.newStar,
        [property]: event.target.value
      }
    })
  }

  getFromSwapi = (nextUrl) => {
    axios({
      method: 'GET',
      url: nextUrl
    })
      .then((response) => {
        this.setState({
          planetList: [
            ...this.state.planetList,
            ...response.data.results.map(planet => ({ name: planet.name, diameter: planet.diameter }))
          ]
        })
        let url = response.data.next;
        if (url != null) {
          this.getFromSwapi(url);
        }
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
  }
  componentDidMount = () => {
    let nextUrl = 'https://swapi.co/api/planets/?page=1&format=json';
    this.getFromSwapi(nextUrl);
  }

  render() {
    return (
      <div className="App">
        <Introduction />
        <NewStar newStar={this.state.newStar} />
        <StarList starList={this.state.starList} />
        <NewStarForm newStar={this.state.newStar} addStar={this.addStar} handleChange={this.handleChange} />
        <PlanetList planetList={this.state.planetList} />
      </div>
    );
  }
}

export default App;
