import React from 'react';
import './App.css';
import Header from './components/Header'
import Menu from './components/Menu'

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div className="App" >
        <Header />
        <Menu />
      </div>
    );
  }

}

export default App;
