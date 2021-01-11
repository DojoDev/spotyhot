import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Main  from './Pages/Main/Main';
import CreatePlaylist  from './Pages/CreatePlaylist/CreatePlaylist';

export default function Routes(){
   return(
       <Router>
         <Switch>
             <Route path="/" exact component={Main}/>
             <Route path="/create-playlist" component={CreatePlaylist}/>
         </Switch>
       </Router>

   )
}