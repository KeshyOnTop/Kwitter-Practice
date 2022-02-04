var firebaseConfig = {
    apiKey: "AIzaSyDMUQW5f9p-mIfznVxJzIlXG0HD_tVffC0",
    authDomain: "practice-aca9d.firebaseapp.com",
    databaseURL: "https://practice-aca9d-default-rtdb.firebaseio.com",
    projectId: "practice-aca9d",
    storageBucket: "practice-aca9d.appspot.com",
    messagingSenderId: "763346651280",
    appId: "1:763346651280:web:0f11b26e21161063a2b015"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });
}
