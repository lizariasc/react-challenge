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
          <div className='page-background'>

            <Button />
          </div>
        </main>

      </div>
    );
  }
}


export default App;
