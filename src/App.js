import React, { Component } from 'react';

import NavBar from "./components/navbar";
import Card from "./components/card";

import california from './images/california.png';
import dragon from './images/dragon.png';
import dynamite from './images/dynamite.png';
import philadelphia from './images/philadelphia.png';
import rainbow from './images/rainbow.png';
import shrimp from './images/shrimp.png';

class App extends Component {
  render() {
    return (
      <>
        <NavBar></NavBar>
        <h1 className="p-5">First application React</h1>
        <div className="container">
          <div className="row row-cols-3">
            <Card image={california} title="Sushi1" price={2.50} ></Card>
            <Card image={dragon} title="Sushi1" price={2.50} ></Card>
            <Card image={dynamite} title="Sushi1" price={2.50} ></Card>
          </div>
          <div className="row row-cols-3 mt-3">
            <Card image={philadelphia} title="Sushi1" price={2.50} ></Card>
            <Card image={rainbow} title="Sushi1" price={2.50} ></Card>
            <Card image={shrimp} title="Sushi1" price={2.50} ></Card>
          </div>
        </div >
      </>
    );
  }

}

export default App;
