import React, { Component } from 'react';
import Introduction from '../Introduction/Introduction';
import NewStar from '../NewStar/NewStar'
import StarList from '../StarList/StarList';
import NewStarForm from '../NewStarForm/NewStarForm';

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
      }
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
  render() {
    // let starListItemArray = [];

    const starListItemArray = this.state.starList.map(star =>
      <li key={star.name}>
        The star {star.name} is {star.diameter} in diameter.
    </li>)

    return (
      <div className="App">
        <Introduction />
        <NewStar newStar={this.state.newStar} />
        <StarList starList={this.state.starList}/>
        <NewStarForm newStar={this.state.newStar} addStar={this.addStar} handleChange={this.handleChange}/>
      </div>
    );
  }
}

export default App;
