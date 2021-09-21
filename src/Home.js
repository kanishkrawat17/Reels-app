import { useContext } from "react";
import { Redirect } from "react-router";
import { authContext } from "./Authprovider";
import { auth, singInWithGoogle } from "./firebase";

let Home = ()=> {

  let user  = useContext(authContext);
  return (
  <>
  {user ? "" : <Redirect to = "/login" />}

  <h1>Home</h1>
  <button onClick={()=>{

    auth.signOut();

  }}> Logout</button>
  </>
  );
  
}

export default Home;
