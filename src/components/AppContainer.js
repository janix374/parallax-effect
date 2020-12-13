import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Lemon from './Lemon';

const AppContainer = () => {
    return (
        <Router>
        <div>
            <Switch>
                <Route path="/" exact component={Lemon} />
            </Switch>
        </div>
      </Router>
    )
}

export default AppContainer;
