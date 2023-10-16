import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div className="col">
                <div className="card mb-5" style={{ width: "18rem" }}>
                    <button className="btn btn-primary" onClick={() => this.props.onIncrement(this.props.card)}>Aggiungi <span className='badge badge-light'>{this.props.card.quantità}</span></button>
                    <img src={this.props.card.image} className="card-img-top" alt="immagine_1" />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.card.title}</h5>
                        <p className="card-text">€{this.props.card.price}</p>
                        <button className="btn btn-danger" onClick={() => this.props.onDelete(this.props.card.id)}>Elimina</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;