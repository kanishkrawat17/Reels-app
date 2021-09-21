import Login from "./Login";
import Home from "./Home";
import {BrowserRouter as Router , Route, Switch } from "react-router-dom";

let App = ()=>{
    return (
        <Router>
            <Switch>

                <Route path="/home">
                    <Home />
                </Route>

                <Route path = "/login"> 
                    <Login /> 
                </Route>

            </Switch>
        </Router>
    )
}

export default App;

