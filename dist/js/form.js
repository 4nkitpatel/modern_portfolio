// Initialize Firebase
var config = {
    apiKey: "AIzaSyCJ5Nvjnt2dqdDHgiYESw6ezvT7dTPPCwE",
    authDomain: "contactform-f9e07.firebaseapp.com",
    databaseURL: "https://contactform-f9e07.firebaseio.com",
    projectId: "contactform-f9e07",
    storageBucket: "contactform-f9e07.appspot.com",
    messagingSenderId: "873266782189"
};
firebase.initializeApp(config);

//reference massages collection
var messagesRef = firebase.database().ref('messages');

//listen for the form submit

document.getElementById('form-control').addEventListener('submit',submitForm);

//submit form
function submitForm(e){
    e.preventDefault();
    //get values
    var fname = getInputVal('fname');
    var lname = getInputVal('lname');
    var email = getInputVal('email');
    var message = getInputVal('message');

    //save message
    saveMessage(fname, lname, email, message);

    //show alerts
    document.querySelector('.alert').style.display = "block";

    //hide alert after 3 seconds

    setTimeout(function(){
        document.querySelector('.alert').style.display = "none";
    },3000)
}

//function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

//save message to firebase

function saveMessage(fname,lname,email,message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        fname : fname,
        lname : lname,
        email : email,
        message : message
    });
}
