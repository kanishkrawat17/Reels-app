import Login from "./Login";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Authprovider from "./Authprovider";

let App = () => {
  return (
    <Authprovider>
      <Router>
        <Switch>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
          
        </Switch>
      </Router>
    </Authprovider>
  );
};

export default App;
