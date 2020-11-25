import { combineReducers } from "redux";

const cocktailsReducer = () => {
  return [
    {
      id: 1,
      name: "Allegheny",
      image: "./images/default_glassware.png",
      glass: "Martini",
      servings: 1,
      baseIngredient: ["Bourbon"],
      recipe: [
        { id: 1, measureAmount: 1, measureType: "oz.", ingredient: "Bourbon" },
        {
          id: 2,
          measureAmount: 1,
          measureType: "oz.",
          ingredient: "Dry Vermouth",
        },
        {
          id: 3,
          measureAmount: 1.5,
          measureType: "tsps.",
          ingredient: "Blackberry-flavoured Brandy",
        },
        {
          id: 4,
          measureAmount: 1.5,
          measureType: "tsps.",
          ingredient: "Lemon Juice",
        },
      ],
      additionalIngredients: [],
      garnish: ["Twist of Lemon"],
      instructions:
        "Shake with ice and strain into cocktail glass. Add a twist of lemon peel on top.",
    },
    {
      id: 2,
      name: "Singapore Sling",
      image: "./images/default_glassware.png",
      glass: "Collins",
      servings: 1,
      baseIngredient: ["Brandy", "Gin"],
      recipe: [
        { id: 1, measureAmount: 2, measureType: "oz.", ingredient: "Gin" },
        {
          id: 2,
          measureAmount: 0.5,
          measureType: "oz.",
          ingredient: "Cherry-flavoured Brandy",
        },
        {
          id: 3,
          measureAmount: 0.5,
          measureType: "Juice of",
          ingredient: "Lemon",
        },
      ],
      additionalIngredients: ["Club Soda"],
      garnish: ["Seasonal Fruits"],
      instructions:
        "Shake lemon, sugar, and gin with ice and strain into collins glass. Add ice cubes and fill with club soda. Float cherry-flavoured brandy on to. Decorate with fruits in season and serve with straws.",
    },
    {
      id: 3,
      name: "London Buck",
      image: "./images/default_glassware.png",
      glass: "Highball",
      servings: 1,
      baseIngredient: ["Gin"],
      recipe: [
        { id: 1, measureAmount: 2, measureType: "oz.", ingredient: "Gin" },
        {
          id: 2,
          measureAmount: 0.5,
          measureType: "Juice of",
          ingredient: "Lemon",
        },
      ],
      additionalIngredients: ["Ginger Ale", "Ice Cubes"],
      garnish: [],
      instructions:
        "Pour gin and lemon juice over ice cubes in highball glass. Fill with ginger ale and stir.",
    },
    {
      id: 4,
      name: "Bermuda Triangle",
      image: "./images/default_glassware.png",
      glass: "Old-Fashioned",
      servings: 1,
      baseIngredient: ["Rum"],
      recipe: [
        {
          id: 1,
          measureAmount: 2,
          measureType: "oz.",
          ingredient: "Spiced Rum",
        },
        {
          id: 2,
          measureAmount: 1,
          measureType: "oz.",
          ingredient: "Peach Schnapps",
        },
        {
          id: 3,
          measureAmount: 3,
          measureType: "oz.",
          ingredient: "Orange Juice",
        },
      ],
      additionalIngredients: ["Ice Cubes"],
      garnish: [],
      instructions: "Pour ingredients into ice filled old-fashioned glass",
    },
  ];
};

const selectedCocktailReducer = (selectedCocktail = null, action) => {
  if (action.type === "COCKTAIL_SELECTED") {
    return action.payload;
  }
  return selectedCocktail;
};

export default combineReducers({
  cocktails: cocktailsReducer,
  selectedCocktail: selectedCocktailReducer,
});
