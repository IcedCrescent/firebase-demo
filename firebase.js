// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getDatabase, ref, child, get } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-analytics.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAvVCDCSEMtWN6zSUaJJbzXWkt_yJwx0ms",
    authDomain: "fir-demo-5d225.firebaseapp.com",
    projectId: "fir-demo-5d225",
    storageBucket: "fir-demo-5d225.appspot.com",
    messagingSenderId: "479655188171",
    appId: "1:479655188171:web:6d11b49c1fd06c59fded4e",
    measurementId: "G-RH98NRYZYZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const userList = document.getElementById('user-list');

// connect firebase
const dbRef = ref(getDatabase());

// get all data from 'users' collection
get(child(dbRef, `users`)).then((snapshot) => {
    if (snapshot.exists()) {
        console.log(snapshot.key, snapshot.val());
        const users = snapshot.val(); // Get the users
        // Update the DOM
        for (let i = 0; i < users.length; i++) {
            const user = users[i];
            userList.innerHTML += 
            `
            <li onclick="userClicked(${i})">${user.name}</li>
            `;
        }

    } else {
        console.log("No data available");
    }
}).catch((error) => {
    console.error(error);
});
