import React from 'react';
import './App.css';
import MyNavBar from './components/navbar';
import Home from './components/home';

class App extends React.Component {
  render() {
    return (
      <div>
        <MyNavBar />
        {this.props.children}
      </div>
    );
  }
}

export default App;
