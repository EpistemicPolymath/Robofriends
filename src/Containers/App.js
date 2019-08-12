import React, { Component } from 'react'; // Destructuring
import { connect } from 'react-redux';
import CardList from '../Components/CardList'; // CardList Component
import SearchBox from '../Components/SearchBox'; // SearchBox Component
import Scroll from '../Components/Scroll'; // Scroll Functionality Component
// import { robots } from './robots'; // Imports Robots object
import './App.css'; // CSS

// Redux
import { setSearchField } from '../actions.js';

const mapStateToProps = (state) => {
    return {
        searchField: state.searchField
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}
// App Class
class App extends Component {
  constructor() {
    super(); // Calls the Constructor of Component
    this.state =  { // Structure for our State
      robots: []
    }
  }

// Lifecycle Method
  componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {this.setState({ robots: users })});
  }

  render() {
    // Destructuring for Cleaner Code - allows us to move rep
   const { robots } = this.state;
   const { searchField, onSearchChange } = this.props;
    // Filtering The Robots Array Of Objects by the Event Value
    const filteredRobots = robots.filter(robot => {
          return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    if (!robots.length) {
      return <h1>Loading...</h1>
    } else {
      return (
        <div className="tc">
            <h1 className="f2">Robofriends</h1>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
            <CardList robots={ filteredRobots }/>
            </Scroll>
        </div>
      );
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
