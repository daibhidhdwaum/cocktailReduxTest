import CocktailList from "./CocktailList";
import CocktailDetail from "./CocktailDetail";

const App = () => {
  return (
    <div className="cocktailInfo">
      <CocktailList />
      <CocktailDetail />
    </div>
  );
};

export default App;
