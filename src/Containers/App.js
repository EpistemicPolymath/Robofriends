import React, { Component } from 'react'; // Destructuring
import { connect } from 'react-redux';
import CardList from '../Components/CardList'; // CardList Component
import SearchBox from '../Components/SearchBox'; // SearchBox Component
import Scroll from '../Components/Scroll'; // Scroll Functionality Component
// import { robots } from './robots'; // Imports Robots object
import './App.css'; // CSS

// Redux
import { setSearchField, requestRobots } from '../actions.js';

const mapStateToProps = (state) => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
      onRequestRobots: () => dispatch(requestRobots())
    }
}
// App Class
class App extends Component {
// Lifecycle Method
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    // Destructuring
   const { searchField, onSearchChange, robots, isPending } = this.props;
    // Filtering The Robots Array Of Objects by the Event Value
    const filteredRobots = robots.filter(robot => {
          return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    if (isPending) {
      return <h1 className="tc f2">Loading...</h1>
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
