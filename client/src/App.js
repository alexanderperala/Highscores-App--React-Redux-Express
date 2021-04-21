import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NewHighScore from "./components/NewHighScore/NewHighScore";
import DetailsOfGame from "./components/DetailsOfGame/DetailsOfGame";
import "./App.css";


const App = () => {

   
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home  />
        </Route>

        <Route path="/AddNewHighsScore">
          <NewHighScore  />
        </Route>

        <Route path="/Games/:title">
          <DetailsOfGame />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
