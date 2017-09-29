import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import HeaderView from './HeaderView';
import LeftView from './LeftView';
import RecipeDetails from './RecipeDetails';
import RecipeEdit from './RecipeEdit';
import PageNotFound from './PageNotFound';
import RecipeHome from './RecipeHome';

const App = (props) => {
  return (
    <div className="container">
      <div className="row">
        <HeaderView title="Recipe Database" />
      </div>
      <div className="row">
        <div className="col-xs-4">
          <LeftView />
        </div>
        <div className="col-xs-8">
          <Switch>
            <Route exact path="/" component={RecipeHome} />
            <Route exact path="/edit" component={RecipeEdit} />
            <Route exact path="/recipes/:id" component={RecipeDetails} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default connect(
  state => state.routing
)(App);
