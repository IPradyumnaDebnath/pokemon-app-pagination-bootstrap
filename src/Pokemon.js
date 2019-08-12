import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
class Pokemon extends Component {

    render() {
        const pokemonId = this.props.url.split('/')[this.props.url.split('/').length - 2]
        console.log("Index", pokemonId)
        const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonId}.png?raw=true`
        return (
            <div className="container ">
                <div className="card">
                    <div className="card-header bg-success">
                        {this.props.pokemonName.toUpperCase()}  ID:{pokemonId}
                    </div>
                    <div className="card-body w-100 h-100">
                        <img alt="!" src={imageUrl}></img>
                    </div>
                </div>
            </div>
        )
    }
}
export default Pokemon