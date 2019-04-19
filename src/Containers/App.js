import React, { Component } from 'react'; // Destructuring
import CardList from '../Components/CardList'; // CardList Component
import SearchBox from '../Components/SearchBox'; // SearchBox Component
import Scroll from '../Components/Scroll'; // Scroll Functionality Component
// import { robots } from './robots'; // Imports Robots object
import './App.css'; // CSS


// App Class
class App extends Component {
  constructor() {
    super(); // Calls the Constructor of Component
    this.state =  { // Structure for our State
      robots: [],
      searchfield: ''
    }
  }

// Lifecycle Method
  componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {this.setState({ robots: users })});
  }

  onSearchChange = (event) => {
      // Updating the State To Match The OnChange Event Value
      this.setState({ searchfield: event.target.value });
  }

  render() {
    // Destructuring for Cleaner Code - allows us to move rep
   const { robots, searchfield } = this.state;
    // Filtering The Robots Array Of Objects by the Event Value
    const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    if (!robots.length) {
      return <h1>Loading...</h1>
    } else {
      return (
        <div className="tc">
            <h1 className="f2">Robofriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
            <CardList robots={ filteredRobots }/>
            </Scroll>
        </div>
      );
    }
  }
}


export default App;
