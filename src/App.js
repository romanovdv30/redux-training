import React, { Component } from 'react';
import './App.css';
import UserList from './components/UserList/UserList';
import MusicList from './components/MusicList/MusicList';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <UserList/>
        <MusicList/>
      </div>
    );
  }
}

export default App;
