import Table from './Table';
import TableBody from './Table';
import TableHeader from './Table';
import './App.css';
import { render } from 'react-dom';
import { Component } from 'react';

class App extends Component {
  state = {
    characters: [],
  }

removeCharacter = (index) => {
  const {characters} = this.state

  this.setState({
    characters: characters.filter((character, i) => {
      return i !== index
    }),
  })
}

  render() {
    const {characters} = this.state
  return (
    <div className="container">
      <Table characterData={characters} removeCharacter={this.removeCharacter}/>
    </div>
  );
}
}

export default App;
