import React, { Component } from 'react';
import seedColors from './seedColors';
import Palette from './Palette';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Palette {...seedColors[2]} />
      </div>
    );
  }
}

export default App;
