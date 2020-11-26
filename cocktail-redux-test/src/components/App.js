import CocktailList from "./CocktailList";
import CocktailDetail from "./CocktailDetail";
import Wrapper from "./Wrapper";
import Container from "./Container";

const App = () => {
  return (
    <div>
      <Wrapper>
        <Container>
          <CocktailDetail />
          <CocktailList />
        </Container>
      </Wrapper>
    </div>
  );
};

export default App;
