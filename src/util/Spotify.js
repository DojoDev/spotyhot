const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
let accessToken;
const Spotify = {
    getAccessToken() {
        if(accessToken) {
            return accessToken;
        }

        //check for accessToken match if it hasn't been set
        const path = window.location.href
        const tokenMatch = path.match(/access_token=([^&]*)/);
        const expiresMatch = path.match(/expires_in=([^&]*)/);

        

        if(tokenMatch && expiresMatch) {
            accessToken = tokenMatch[1];
            const expiresIn = Number(expiresMatch[1]);
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return accessToken;
        } else {
            const accessURL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&scope=playlist-modify-public&redirect_uri=${REDIRECT_URI}`;
            window.location = accessURL;
        }
    },
    search(term) {
        const accessToken = Spotify.getAccessToken();
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
            .then(response => response.json())
            .then(jsonResponse => {
                if(!jsonResponse.tracks) {
                    return [];
                } else {
                    return jsonResponse.tracks.items.map(track => ({
                       id: track.id,
                       name: track.name,
                       artist: track.artists[0].name,
                       album: track.album.name,
                       uri: track.uri
                    }));
                }
            })
    },
    savePlaylist(name, trackURIs, resCesius) {
        if(!name || !trackURIs.length) {
            return;
        } else {
            const accessToken = Spotify.getAccessToken();
            const headers = { Authorization: `Bearer ${accessToken}` };
            const valC = resCesius;
            localStorage.setItem('@temp-value-app/value-c', valC);
            console.log('Salvo');
            let userId;

            return fetch(`https://api.spotify.com/v1/me`, { headers: headers })
                .then(response => response.json())
                .then(jsonResponse => {
                    userId = jsonResponse.id;
                    return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
                        headers: headers,
                        method: 'POST',
                        body: JSON.stringify({ name: name })
                    })
                        .then(response => response.json())
                        .then(jsonResponse => {
                            const playlistId = jsonResponse.id;
                            return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
                                headers: headers,
                                method: 'POST',
                                body: JSON.stringify({ uris: trackURIs})
                            })
                        });
                });
        }
    }
};


export default Spotify;