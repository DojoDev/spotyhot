import React from 'react';
import Header from '../../Components/Header/Header';
import Main from '../../Pages/Main/Main';
import CreatePlaylist from '../../Pages/CreatePlaylist/CreatePlaylist';

import Footer from '../../Components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


export default function App() {
  return (
    <div >
      <Router>
         <Switch>
             <Route exact path="/" component={Main}/>
             <Route path="/create-playlist" component={CreatePlaylist}/>
             <Route path="*" component={Main}/>
         </Switch>
       </Router>
    </div>
  );
}
