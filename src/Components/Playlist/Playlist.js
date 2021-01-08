import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const marks = [
    {
        value: 0,
        label: '0°C',
    },
    {
        value: 20,
        label: '20°C',
    },
    {
        value: 37,
        label: '37°C',
    },
    {
        value: 100,
        label: '100°C',
    },
];

function valuetext(value) {
    return `${value}°C`;
}


class Playlist extends React.Component {
    constructor(props) {
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSliderChange = this.handleSliderChange.bind(this);
    }

    handleNameChange(e) {
        console.log(e.target.value);
        this.props.onNameChange(e.target.value);
    }



    handleSliderChange(e, val) {
        
        this.props.onSaveTemp(val);

    }
    

    render() {
        return (
            <div className="Playlist">
                <Typography id="discrete-slider-custom" gutterBottom>
                Temperatura Ideal 
                </Typography>
                <Slider
                    onChange={this.handleSliderChange}
                    defaultValue={20}
                    getAriaValueText={valuetext}
                    aria-labelledby="discrete-slider-custom"
                    step={1}
                    valueLabelDisplay="auto"
                    className="Slider-temp"
                    marks={marks}   
                    
                />
                <input onChange={this.handleNameChange} defaultValue={this.props.playlistName} />
                <TrackList isRemoval={true} onRemove={this.props.onRemove} tracks={this.props.playlistTracks} />
                <button onClick={this.props.onSave} className="Playlist-save">Salve Sua Playlist</button>
            </div>
        );
    }
}

export default Playlist;