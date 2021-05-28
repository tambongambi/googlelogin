import React, {useState, useEffect} from 'react'
import firebase from "./fire";


function App() {

  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');
  
  const onSubmit = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;
  
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  const onLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        console.log("Danke!");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  
      setName('');
      setPhoto('');
  };
  
  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        console.log("user signed in");
        console.log(user.displayName + "\n" + user.email);
  
        setName(user.displayName);
        setPhoto(user.photoURL);

      } else {
        // No user is signed in.
        console.log("user takuli");
      }
    });
  
  }, []); 
    
  
  return (
    <div>
    {name && name.length > 0 ? (
          <div>
            <p>Mulishani Bane? Welcome!</p>
            <img src={photo} alt="" />
            <h5>{name}</h5>
            <button onClick={onLogout}> Naenda (LogOut)</button>
          </div>
        ) : (
          <div>
            <h5>Nishani Iwe? Just log in ah ah?</h5>
            <button onClick={onSubmit}>Login with Google</button>
          </div>
        )}  
    </div>
  )
}

export default App
