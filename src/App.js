import React, {Component} from 'react';
import './App.css';
import {Cardlist} from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor(){
    super()
    this.state = {
      monsters: [],
      searchfield: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState({ monsters:users }))
  }

  render(){
    const { monsters, searchfield } = this.state
    const filtered = monsters.filter(user => (
      user.name.toLowerCase().includes(searchfield.toLowerCase())
    ));
    
    return (
      <div className="tc">
        <header>
          <h1 className="f1">Monsters Rolodex</h1>          
        </header>
        <SearchBox 
          placeholder = "Search monster"
          handlechange = {e => this.setState({ searchfield: e.target.value }) }
        />
        { 
          (filtered.length ===0) ?
          <h2>No results to display</h2> :
          <Cardlist monsters= {filtered} />  
        }                
      </div>
    );
  }
}

export default App;
