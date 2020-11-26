import { connect } from "react-redux";

const CocktailDetail = ({ cocktail }) => {
  if (!cocktail) {
    return <div>Click a cocktail to display recipe</div>;
  }

  return <div>{cocktail.name}</div>;
};

const mapStateToProps = (state) => {
  return { cocktail: state.selectedCocktail };
};

export default connect(mapStateToProps)(CocktailDetail);
