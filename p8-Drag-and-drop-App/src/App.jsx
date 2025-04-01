import React from 'react';
import './App.css';
import List from './Components/List';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ["Red", "Blue", "Green", "Yellow","Gray","Pink","Orange","Purple","Brown"]
    };
  }

  render() {
    return (
      <div>
        <List colors={this.state.colors} />
      </div>
    );
  }
}

export default App;
