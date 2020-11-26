import { connect } from "react-redux";
import RecipeCard from "./RecipeCard";
import H3 from "./H3";
import Paragraph from "./Paragraph";
import { Ul, Li } from "./Ingredients";
import { ImageContainer, Image } from "./Image";

const CocktailDetail = ({ cocktail }) => {
  console.log(cocktail);
  if (!cocktail) {
    return <div>Click a cocktail to display recipe</div>;
  }

  return (
    <RecipeCard>
      <ImageContainer>
        <Image src={cocktail.image} alt={cocktail.name} />
      </ImageContainer>
      <H3>{cocktail.name}</H3>
      <Ul>
        {cocktail.recipe.map((ingredient) => {
          console.log(ingredient);
          return (
            <Li key={ingredient.id}>
              {ingredient.measureAmount} {ingredient.measureType}{" "}
              {ingredient.ingredient}
            </Li>
          );
        })}
      </Ul>
      <Paragraph>{cocktail.instructions}</Paragraph>
    </RecipeCard>
  );
};

const mapStateToProps = (state) => {
  return { cocktail: state.selectedCocktail };
};

export default connect(mapStateToProps)(CocktailDetail);
