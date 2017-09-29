import React, { Component } from 'react';

import HeaderView from './HeaderView';
import LeftView from './LeftView';
import RightView from './RightView';

class App extends Component {
  constructor() {
    super();

    this.state = {
      recipes: [],
      showEdit: false,
      recipeToShow: null,
      query: null
    };
  }

  handleSubmitRecipe = (recipe) => {
    let recipes = Object.assign(this.state.recipes);
    recipes.push(recipe);

    this.setState({
      recipes,
      recipeToShow: recipe,
      showEdit: false
    });
  }

  handleCreateRecipe = () => {
    this.setState({
      showEdit: true
    });
  }

  handleSelectRecipe = (recipe) => {
    this.setState({
      showEdit: false,
      recipeToShow: recipe
    });
  }

  handleSearch = (value) => {
    this.setState({
      query: value
    });
  }

  render() {
    let { recipes, query } = this.state;
    let filteredRecipes = query ? 
      recipes.filter((recipe) => 
        query && recipe.name.toLowerCase().indexOf(query.toLowerCase()) > -1) : 
      recipes;

    return (
      <div className="container">
        <div className="row">
          <HeaderView title="Recipe Database" />
        </div>
        <div className="row">
          <div className="col-xs-4">
            <LeftView
              recipes={filteredRecipes}
              onCreateRecipe={this.handleCreateRecipe}
              onSelect={this.handleSelectRecipe}
              onSearch={this.handleSearch} />
          </div>
          <div className="col-xs-8">
            <RightView
              onSubmitRecipe={this.handleSubmitRecipe}
              showEdit={this.state.showEdit}
              recipe={this.state.recipeToShow} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
