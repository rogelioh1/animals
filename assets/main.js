var initializeApp = require('firebase/app')
var getDatabase = require('firebase/database')
var firebase = require('firebase/app-compat');

const firebaseConfig = {
    apiKey: "AIzaSyD2VV0-kWrRKNbaPZLhtmBXzqHIPDDXh0Y",
    authDomain: "animalfarm-92073.firebaseapp.com",
    projectId: "animalfarm-92073",
    storageBucket: "animalfarm-92073.appspot.com",
    messagingSenderId: "346073066136",
    appId: "1:346073066136:web:fa39cf50e9c3ad05fa3eed"
  };


function writeUserData(userId, name, email, imageUrl) {
    const db = getDatabase();
    set(ref(db, 'users/' + userId), {
      username: name,
      email: email,
      profile_picture : imageUrl
    });
}
  
  const auth = getAuth(app);
  const user = auth.currentUser;
  
  if (user !== null) {
    user.providerData.forEach((profile) => {
      console.log("Sign-in provider: " + profile.providerId);
      console.log("  Provider-specific UID: " + profile.uid);
      console.log("  Name: " + profile.displayName);
      console.log("  Email: " + profile.email);
      console.log("  Photo URL: " + profile.photoURL);
    });
  }