import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Landing from './pages/Landing'
import Playlist from './pages/Playlist'

function Routes(){
    return(
        <BrowserRouter>
            <Route exact path='/' component={Landing} />
            <Route path='/playlist:id' component={Playlist} />

        </BrowserRouter>
    )
}
export default Routes;