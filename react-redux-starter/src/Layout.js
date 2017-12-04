import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './features/Home/Home';
import About from './features/About/About';

const Layout = ({user, lang}) => (
    <main className='layout'>
        <Switch>
            <Route path='/about' component={About}/>
            <Route path='/' component={Home}/>
        </Switch>
    </main>
);

export default Layout;