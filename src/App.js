import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div class="nav-bar">
          <ul>
            <li class="active">Home</li>
            <li>languages</li>
            <li>projects</li>
            <li>Websites</li>
            <li>About</li>
          </ul>
        </div>
        <h2 class="heading">Profile</h2>
        <div class="profile">
        <h3>Coko</h3>
        <img src="file:///collins/home/Pictures/me.png" alt=""></img>
        </div>
      </div>
    );
  }
}

export default App;
