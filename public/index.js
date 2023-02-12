import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth } from "../../firebase.js";

// Import the functions you need from the SDKs you nee
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2VV0-kWrRKNbaPZLhtmBXzqHIPDDXh0Y",
  authDomain: "animalfarm-92073.firebaseapp.com",
  projectId: "animalfarm-92073",
  storageBucket: "animalfarm-92073.appspot.com",
  messagingSenderId: "346073066136",
  appId: "1:346073066136:web:fa39cf50e9c3ad05fa3eed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
console.log(initializeApp)
document.addEventListener("DOMContentLoaded", event => {
    const app = firebase.app();
  
})
  
function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
  
    firebase.auth().signInWithPopup(provider)
        .then(result => {
            const user = result.user;
            location.href = 'main.html';
            console.log(user)
        })
        .catch(console.log)
  }

  window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }
});
