import { createContext, useEffect } from "react";
import { auth, firestore } from "./firebase";
import { useState } from "react";

export const authContext = createContext();

let Authprovider = (props) => {
  let [user, setUser] = useState(null);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    {console.log("AUTHMEHU");}
    let unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        let { displayName, email, uid, photoURL } = user;
        setUser({ displayName, email, uid, photoURL });
        console.log("in auth-2");
        let docRef = firestore.collection("users").doc(uid);
        let documentSnapshot = await docRef.get();
        if (!documentSnapshot.exists) {
          docRef.set({
            displayName,
            email,
            uid,
            photoURL,
          });
        }
      } else {
        setUser(null);
      }

      setLoading(false);
      //   console.log(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <authContext.Provider value={user}>
        {!loading && props.children}
      </authContext.Provider>
    </>
  );
};

export default Authprovider;
