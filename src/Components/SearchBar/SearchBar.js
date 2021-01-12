import React from 'react';
import './SearchBar.css';


class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.search = this.search.bind(this);
        this.state = {
            term: ''
        }
    }

    handleTermChange(e) {
        this.setState({ term: e.target.value });
    }

    search() {
        this.props.onSearch(this.state.term)
    }

    render() {
        return (
            <div className="SearchBar">
                <input 
                data-testid="form-field"
                onChange={this.handleTermChange} 
                placeholder="Busque Artista, Albúm Predileto e Música"/>

                <button 
                data-testid="form-btn" 
                onClick={this.search} 
                className="SearchButton">Buscar Música Para Meu Playlist</button>
            </div>
        );
    }
}

export default SearchBar;