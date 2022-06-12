import React, { Component } from 'react';
import Header from './Header';

class App extends Component {
  
  

  increment(){

    
  }

  render() {
    return (
      <div>

      <Header>
        Contador: {}
      </Header> 

      <button>Incrementar</button>

      </div>
    );
  }
}

export default App;