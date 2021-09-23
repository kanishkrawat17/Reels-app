import { useContext } from "react";
import { Redirect } from "react-router";
import { authContext } from "./Authprovider";
import { auth, singInWithGoogle } from "./firebase";
import { storage } from "./firebase";
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

      <input 
      
      onClick={(e)=>{
        e.currentTarget.value=null;
      }}

      onChange={(e)=>{
        // console.log(e)
        // console.log(e.currentTarget.files);

        let videoObj = e.currentTarget.files[0];
        let{name,size,type} = videoObj;

        size = size/1000000;
        if(size   >  10){
          alert("File is larger than 10 mb");
          return;
        }

          type  = type.split("/")[0];
          if(type !== "video"){
            alert("File is not a video ");
            return;
          }

          let uploadTask = storage
                          .ref(`/posts/${user.uid}/${Date.now()+"-"+name}`)
                          .put(videoObj);

          uploadTask.on("state-changed",null,null,()=>{
            uploadTask.snapshot.ref.getDownloadURL().then((url)=>{
              console.log(url);
            })
          })
      }}
      type="file" />
    </>
  );
};

export default Home;