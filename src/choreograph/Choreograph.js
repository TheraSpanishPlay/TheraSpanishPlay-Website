import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../components/home/Home.js'

const Choreograph = () => {
    return (
        <Switch>
            <Route exact path="/" render={() => <Home />} />
        </Switch>
    );

}

export default Choreograph;