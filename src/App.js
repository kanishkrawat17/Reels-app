import Login from "./Login";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Authprovider from "./Authprovider";
import {firestore} from "./firebase";
import { useEffect } from "react";

let App = () => {

  useEffect(()=>{

    firestore.collection("users").add({body : "this is val 1"})


    async function f (){
      let querySnapshot = await firestore.collection("users").get();
      for(let i = 0 ; i < querySnapshot.docs.length ; i++){
        console.log(querySnapshot.docs[i].data())
      }
    }
    f();


  },[]);

  return (



    <h1>App</h1>
    
    // <Authprovider>
    //   <Router>
    //     <Switch>

    //       <Route exact path="/login">
    //         <Login />
    //       </Route>

    //       <Route exact path="/">
    //         <Home />
    //       </Route>
          
    //     </Switch>
    //   </Router>
    // </Authprovider>
  );
};

export default App;
