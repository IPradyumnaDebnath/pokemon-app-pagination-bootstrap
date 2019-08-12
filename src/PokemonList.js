import React, { Component } from 'react'
import Pokemon from './Pokemon';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
class PokemonList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [],
      nextPage: "",
      prevPage: "",
      error: false
    };
    this.nextLoad = this.nextLoad.bind(this);
    this.prevLoad = this.prevLoad.bind(this);
  }
  nextLoad() {
    const url = this.state.nextPage
    fetch(url).then(
      res => res.json()
    ).then(res => {

      this.setState({
        items: res.results,
        url:url,
        nextPage: res.next,
        prevPage: res.previous,
      });
      console.log("Next", res)

    }).catch(error => {
      console.error(error);
      this.setState({
        error: true
      });
    })
  }

  prevLoad() {
    const url = this.state.prevPage;
    fetch(url).then(
      res => res.json()
    ).then(res => {

      this.setState({
        items: res.results,
        url:url,
        nextPage: res.next,
        prevPage: res.previous,


      });
      console.log("Prev", res)

    }).catch(error => {
      console.error(error);
      this.setState({
        error: true
      });
    })
  }

  componentDidMount() {
    const url = "https://pokeapi.co/api/v2/ability/?limit=3&offset=0"
    fetch(url).then(
      res => res.json()
    ).then(res => {

      this.setState({

        items: res.results,
        url:url,
        nextPage: res.next,
        prevPage: res.previous,


      })
      console.log("Responce", this.state.items)

    }).catch(error => {
      console.error(error);
      this.setState({
        error: true
      });
    })
  }

  render() {
    return (
      <div className="container">
        <ul className="row align-items-center">{this.state.items.map(pokemondata => <li style={{listStyle:"none"}} className="col"  key={pokemondata.name}> <Pokemon pokemonName={pokemondata.name} url={pokemondata.url} /></li>)}</ul>
        <button className="float-left btn-success" onClick={this.prevLoad} disabled={this.state.prevPage==null}>Previous</button>
        <button className="float-right btn-success" onClick={this.nextLoad} disabled={this.state.nextPage==null}>Next</button>
      </div>
    );

  }
}



export default PokemonList
