//1- Create an HTML page with two buttons that argue with each other.
// When one button is clicked, the text "I'm right" should be placed next to it. 
//When the other button is clicked, the text is replaced with, "No, I'm right!"
const rightButton = document.querySelector("#right-button")
const leftButton = document.querySelector("#left-button")
rightButton.addEventListener("click", (event) => {
    text1.innerText = 'Im right';
})
leftButton.addEventListener("click", (event) => {
    text1.innerText = 'No, I am right!';
})

//2-Create an HTML page with a large element on the page that says "Don't hover over me" inside of it.
// When you hover over the element, send an alert to the user that says,
// "Hey, I told you not to hover over me!
const text1 = document.querySelector("#text1")
const bigElement = document.querySelector("h1")
bigElement.addEventListener("mouseenter", (event) => {
    alert('Hey, I told you not to hover over me!');
})



//4- in a Javascript file, write a program which checks the following things:
//checks that the password is 12345678
//if the password is incorrect, send an alert message
//Your page should also include an <h1> tag. If the information in the form is correct,
// have Javascript change the text in the <h1>.HTML page.
document.getElementById("submit").addEventListener("click", function(event){
const mainPass = "12345678";
const passValue  = document.getElementById("password").value;
if(mainPass === passValue )
    {
        document.getElementById("loginHeader").innerHTML = "Login Sucess"
    }
    else{
     alert("Login Failed")
    }
})