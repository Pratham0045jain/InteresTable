// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCl4LES-rr-zGP9ifg_fTvW4hTCM3U2a6g",
    authDomain: "form-1cd7c.firebaseapp.com",
    databaseURL: "https://form-1cd7c.firebaseio.com",
    projectId: "form-1cd7c",
    storageBucket: "form-1cd7c.appspot.com",
    messagingSenderId: "382448791273",
    appId: "1:382448791273:web:f623c3dd287c5454c80a78"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

function signUp() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

    alert("Signed Up");
    email.value;
}

function signIn() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var name = document.getElementById("nameField");

    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

    alert("Welcome Back " + nameField.value);

}

function signOut() {
    auth.signOut();
    alert("Signed Out");
}