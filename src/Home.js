import { useContext } from "react";
import { Redirect } from "react-router";
import { authContext } from "./Authprovider";
import { auth, singInWithGoogle } from "./firebase";
import VideoCard from "./VideoCard";
import "./home.css";

import "./home.css";

let Home = () => {
  let user = useContext(authContext);
  return (
    <>
      {user ? "" : <Redirect to="/login" />}

      <div className="video-container">
        <VideoCard />
      </div>

      <button
        className="home-logout-btn"
        onClick={() => {
          auth.signOut();
        }}
      >
        Logout
      </button>
    </>
  );
};

export default Home;