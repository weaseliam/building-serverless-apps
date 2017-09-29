import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../actions';

const RecipeEdit = ({ createRecipe, history }) => {
  let nameRef, ingredientsRef, instructionsRef;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nameRef.value === '' ||
      ingredientsRef.value === '' ||
      instructionsRef.value === '') {
      return;
    }

    let recipe = {
      id: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5),
      name: nameRef.value,
      ingredients: ingredientsRef.value,
      instructions: instructionsRef.value
    }

    createRecipe(recipe);

    nameRef.value = '';
    ingredientsRef.value = '';
    instructionsRef.value = '';

    history.push(`/recipes/${recipe.id}`);    
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Recipe name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          ref={r => nameRef = r}
          placeholder="Enter recipe name hare" />
      </div>

      <div className="form-group">
        <label htmlFor="ingredients">Recipe Ingredients</label>
        <textarea
          type="text"
          className="form-control"
          id="ingredients"
          ref={r => ingredientsRef = r}
          placeholder="Enter recipe ingredients hare" />
      </div>

      <div className="form-group">
        <label htmlFor="instructions">Recipe Instructions</label>
        <textarea
          type="text"
          className="form-control"
          id="instructions"
          ref={r => instructionsRef = r}
          placeholder="Enter recipe instructions hare" />
      </div>

      <button
        type="submit"
        className='btn btn-primary'
      >
        Save
      </button>
    </form>
  );
};

RecipeEdit.propTypes = {
  createRecipe: PropTypes.func
};

RecipeEdit.defaultProps = {
  createRecipe: () => { }
};

export default connect(
  undefined,
  actions
)(RecipeEdit);
