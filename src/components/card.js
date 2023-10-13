import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div className="col">
                <div className="card" style={{ width: "18rem" }}>
                    <img src={this.props.image} className="card-img-top" alt="immagine_1" />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text">€{this.props.price}</p>
                        <button className="btn btn-danger">Elimina</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;