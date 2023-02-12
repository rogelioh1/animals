import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth } from "../../firebase.js";

// Import the functions you need from the SDKs you nee
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlLZhevkkIQNDOTk77H3frfje7i3FT688",
  authDomain: "animals-93892.firebaseapp.com",
  projectId: "animals-93892",
  storageBucket: "animals-93892.appspot.com",
  messagingSenderId: "292135346726",
  appId: "1:292135346726:web:12cb70b0699fae44683ce7"
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
