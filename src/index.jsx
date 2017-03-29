import React from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

import Home from 'Home';
import About from 'About';
import Login from 'Login';
import Main from 'Main';

require('foundation.min.css');
require('main.less');

render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home}/>
            <Route path="about" component={About}/>
            <Route path="login" component={Login}/>
        </Route>
    </Router>, document.getElementById('app'));
