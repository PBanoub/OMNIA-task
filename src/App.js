import React, { Component } from 'react';
import Banner from './components/banner';
import Header from './components/header';
import NewsList from './components/news-list';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Header />
        <Banner />
        <NewsList/>
      </div>
    );
  }
}

export default App;
