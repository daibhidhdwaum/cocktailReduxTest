export const selectCocktail = (cocktail) => {
  return {
    type: "COCKTAIL_SELECTED",
    payload: cocktail,
  };
};
