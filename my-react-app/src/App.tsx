import React from 'react';
import './App.css';
import Button from './components/Button'
import State from './components/Button'

// The Button component defines its own initial state
class App extends React.Component<any, State> {
  render() {
    return (
      <div className="App">
        <main>
          <Button/>
        </main>
       
      </div>
    );
  }
  }
 

export default App;
