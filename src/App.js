import React, { Component } from 'react';

import NavBar from "./components/navbar";
import Card from "./components/card";

import california from './images/california.png';
import dragon from './images/dragon.png';
import dynamite from './images/dynamite.png';
import philadelphia from './images/philadelphia.png';
import rainbow from './images/rainbow.png';
import shrimp from './images/shrimp.png';
import { createRenderer } from 'react-dom/test-utils';

class App extends Component {
  state = {
    cards: [
      {
        id: 0,
        title: 'california',
        price: 0.50,
        image: california,
        quantità: 0
      },
      {
        id: 1,
        title: 'dragon',
        price: 0.50,
        image: dragon,
        quantità: 0
      },
      {
        id: 2,
        title: 'dynamite',
        price: 0.50,
        image: dynamite,
        quantità: 0
      },
      {
        id: 3,
        title: 'philadelphia',
        price: 0.50,
        image: philadelphia,
        quantità: 0
      },
      {
        id: 4,
        title: 'rainbow',
        price: 0.50,
        image: rainbow,
        quantità: 0
      },
      {
        id: 5,
        title: 'shrimp',
        price: 0.50,
        image: shrimp,
        quantità: 0
      }
    ]
  }

  deleteCard = cardId => {
    const cards = this.state.cards.filter(card => card.id !== cardId);
    this.setState({ cards });
  }

  handleIncrement = card => {
    const cards = [...this.state.cards];
    const id = cards.indexOf(card);
    cards[id] = { ...card };
    cards[id].quantità++;
    this.setState({ cards });
  }

  render() {
    return (
      <>
        <NavBar></NavBar>
        <h1 className="p-5">First application React</h1>
        <div className="container">
          <div className="row row-cols-3">
            {this.state.cards.map(card => (
              <Card
                key={card.id}
                card={card}
                onDelete={this.deleteCard}
                onIncrement={this.handleIncrement}
              >
              </Card>
            ))
            }
          </div>
        </div >
      </>
    );
  }

}

export default App;
