let usernamesymbol = /^[a-zA-Z0-9./]+$/;
let gmail = /[A-Za-z0-9@gmail.com]/;
let passwordsymbol = /^[0-9./]+$/;
let userName = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let btn = document.getElementById('btn');
let userText = document.getElementById('usertext');
let emailText = document.getElementById('emailtext');
let passwordText = document.getElementById('passwordtext');

btn.onclick = function f1 (){
    if(usernamesymbol.test(userName.value)){
        userText.innerHTML = ('right!');
        f2 ();
    } else {
        userText.innerHTML = ('false');
        f2 ();
    }
};
function f2 (){
    if(gmail.test(email.value)){
        emailText.innerHTML = ('right!');
        f3 ();
    } else {
        emailText.innerHTML = ('false');
        f3 ();
    }
};
function f3 (){
    if(passwordsymbol.test(password.value)){
        passwordText.innerHTML = ('right!');
    } else {
        passwordText.innerHTML = ('false');
    }
};
