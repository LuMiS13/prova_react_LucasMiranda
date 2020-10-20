import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';
import Index from '../pages/index';
import Blocks from '../pages/blocks';
import Cards from '../pages/cards';
import Forms from '../pages/forms';
import Pricing from '../pages/pricing';

export default props => (
    <Router history={hashHistory}>
        <Route path='/index' component={Index}/>
        <Route path='/blocks' component={Blocks}/>
        <Route path='/cards' component={Cards}/>
        <Route path='/forms' component={Forms}/>
        <Route path='/pricing' component={Pricing}/>
        <Redirect from='*' to='/index'/>
    </Router>
)