import { useEffect } from "react";
import { auth, singInWithGoogle } from "./firebase";



let Login = () => {
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log(user);
    });

  }, []);

  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() => {
          singInWithGoogle();
        }}
      >
        {" "}
        Login with Google{" "}
      </button>

      <button
        className="btn btn-primary"
        onClick={() => {
          auth.signOut();
        }}
      >
        LogOut
      </button>
    </>
  );
};

export default Login;
