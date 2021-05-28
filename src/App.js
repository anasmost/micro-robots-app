import React, { Component } from 'react';
import './App.css';
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ''
    };
  }

  async componentDidMount() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    const users = await response.json();

    this.setState({
      robots: users
    });
  }

  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App" >
        <h1>Ugliest React App</h1>
        <SearchBox
          placeholder="Search Robots" handleChange={
            (e) => this.setState({ searchField: e.target.value })
          }
        />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
