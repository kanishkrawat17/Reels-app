import { useContext, useEffect } from "react";
import { Redirect } from "react-router";
import { authContext } from "./Authprovider";
import { auth, singInWithGoogle } from "./firebase.js";



let Login = () => {
  
  let user = useContext(authContext);
  return (
    <>
    {user ? <Redirect to="/" /> : ""  }
    {console.log("inlogin")}
      <button
        className="btn btn-primary m-4" 
        onClick={() => {
          singInWithGoogle();
        }}
      >
        {" "}
        Login With Google{" "}
      </button>
    </>
  );
};

export default Login;
