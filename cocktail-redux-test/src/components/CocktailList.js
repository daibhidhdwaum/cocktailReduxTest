import React, { Component } from "react";
import { connect } from "react-redux";
import { selectCocktail } from "../actions";

class CocktailList extends Component {
  renderList = () => {
    return this.props.cocktails.map((cocktail) => {
      return (
        <div key={cocktail.id}>
          <div>
            <h3>{cocktail.name}</h3>
            <h4>Base Ingredients</h4>
            {cocktail.baseIngredient.map((ingredient, index) => {
              return <p key={index}>{ingredient}</p>;
            })}
          </div>
          <button>Recipe</button>
        </div>
      );
    });
  };
  render() {
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return { cocktails: state.cocktails };
};

export default connect(mapStateToProps, { selectCocktail })(CocktailList);
