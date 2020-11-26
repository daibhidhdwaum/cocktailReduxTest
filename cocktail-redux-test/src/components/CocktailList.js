import React, { Component } from "react";
import { connect } from "react-redux";
import { selectCocktail } from "../actions";
import Card from "./Card";
import H3 from "./H3";
import Button from "./Button";

class CocktailList extends Component {
  renderList = () => {
    return this.props.cocktails.map((cocktail) => {
      return (
        <Card key={cocktail.id}>
          <div>
            <H3>{cocktail.name}</H3>
            <h4>Base Ingredients</h4>
            {cocktail.baseIngredient.map((ingredient, index) => {
              return <p key={index}>{ingredient}</p>;
            })}
          </div>
          <Button>Recipe</Button>
        </Card>
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
