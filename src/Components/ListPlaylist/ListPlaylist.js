import React from 'react';
import './ListPlaylist.css';

class ListPlaylist extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ListPlaylist">
                <button onClick={this.props.onList} className="ListPlaylist-save">Listar Playlist</button>
            </div>
        );
    }
}

export default ListPlaylist;