import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="uk-navbar-container" data-uk-navbar>
          <div className="uk-navbar-left">

            <ul className="uk-navbar-nav">
              <li className="uk-active"><a href="#">Active</a></li>
              <li>
                <a href="#">Parent</a>
                <div className="uk-navbar-dropdown">
                  <ul className="uk-nav uk-navbar-dropdown-nav">
                    <li className="uk-active"><a href="#">Active</a></li>
                    <li><a href="#">Item</a></li>
                    <li><a href="#">Item</a></li>
                  </ul>
                </div>
              </li>
              <li><a href="#">Item</a></li>
            </ul>

          </div>
        </nav>
      </div>
    );
  }
}

export default App;
