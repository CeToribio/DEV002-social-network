import { auth, onAuthStateChanged, signOut } from "../firebase/index.js";

const user = auth.currentUser;
console.log(user)


export const viewUser = onAuthStateChanged (auth, (user) => {
    if (user !== null) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      console.log(user)
      // const uid = user.uid;
      console.log(user.uid);
      // ...
        // The user object has basic properties such as display name, email, etc.
      const displayName = user.displayName;
      const email = user.email;
      const photoURL = user.photoURL;
      // const emailVerified = user.emailVerified;
      console.log(displayName);
      console.log(photoURL);
      console.log(email);
    
      // The user's ID, unique to the Firebase project. Do NOT use
      // this value to authenticate with your backend server, if
      // you have one. Use User.getToken() instead.
      const uid = user.uid;
      console.log(user.uid);
    } else {
      // User is signed out
      console.log(user)

      
      // ...
    }
  });

   
 
export const logout = async () => {
  try {
    return await signOut(auth)
  }catch(error){
    console.log(error)

  }}
