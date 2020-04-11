import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Series from '../../containers/Series';
import SingleSeries from '../../containers/SingleSeries';
import Character from '../../containers/Character';

const Main = props => (
    <Switch>
        <Route exact path="/" component={Series} />
        <Route exact path="/series/:id" component={SingleSeries} />
        <Route exact path="/series/character/:id" component={Character} />
    </Switch>
);

export default Main;

