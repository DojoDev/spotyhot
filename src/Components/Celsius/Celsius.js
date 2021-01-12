import React from 'react';
import './Celsius.css';
import axios from 'axios';
import Player from '../Player/Player';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

function PlayerShow(){
  const jsonTarefa = window.localStorage.getItem('@temp-value-app/value-c');
  if(jsonTarefa == null){
    return <Button variant="contained" component={Link} to="/create-playlist" color="primary">Criar Playlist</Button>;
  }else{
    return <Player />;
  }
}
class Celsius extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tempo: [],
      cidade: '',
      estado: ''
    }
  }
  async componentDidMount() {
    const api = {
      key: '96a470d3c828105d0062e7df4e46757b',
      city: 'Campinas',
      country: 'BR'
    }
    axios.get(`http://api.weatherstack.com/current?access_key=${api.key}&query=${api.city},${api.country}`)
      .then(res => {
        this.setState({
          tempo: res.data.current.temperature,
          cidade: res.data.location.name,
          estado: res.data.location.region
        })

      });
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.tempo}ºC</h1>
        <h2>{this.state.cidade}/{this.state.estado}</h2>
        <PlayerShow/>
      </div>
    );
  }
}

export default Celsius;
