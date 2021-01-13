import React,{useState}from 'react';
import Iframe from 'react-iframe';

function SelectPlaylist() {
const jsonTarefa = window.localStorage.getItem('@temp-value-app/value-c');
const playslist = JSON.parse(jsonTarefa);
const playlistId = playslist.playlist.playlistId;
const celsius = playslist.playlist.celsius;
const urlId = `https://open.spotify.com/embed/playlist/${playlistId}`;

if(celsius >20){
    return <Iframe url={urlId}
            width="100%"
            height="350px"
            id="playlistId"
            className="myClassname"
            display="initial"
            position="relative"/>
}else{
    return <Iframe url={urlId}
            width="100%"
            height="350px"
            id="playlistId"
            className="myClassname"
            display="initial"
            position="relative"/>
}
}




export default function Player() {
    return (
        <div>
            <SelectPlaylist/>
        </div>
    );
}
