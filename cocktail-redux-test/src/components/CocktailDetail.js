import { connect } from "react-redux";

const CocktailDetail = () => {
  return <div>This is the cocktail Details section</div>;
};

const mapStateToProps = (state) => {
  console.log(state);
  return { cocktail: state.selectedSong };
};

export default connect(mapStateToProps)(CocktailDetail);
