
// window.onload = chooseImage;

var person1 = prompt("Please enter your name");
var person2 = prompt("Please enter your friend's name");

function chooseImage(){

    var imageArray = ['images/dice1.png', 'images/dice2.png' , 'images/dice3.png' , 'images/dice4.png' , 'images/dice5.png' , 'images/dice6.png']
    var randomNum_player1= Math.floor(Math.random() * imageArray.length);
    var randomNum_player2= Math.floor(Math.random() * imageArray.length);
    
    
    
    document.querySelector(".img1").setAttribute("src", imageArray[randomNum_player1]);
    document.querySelector(".img2").setAttribute("src", imageArray[randomNum_player2]);


    if (randomNum_player1 === randomNum_player2){
        document.querySelector("h1").innerHTML="Tie 😁📍";
        document.querySelectorAll("p")[0].innerHTML= person1 + "🙄";
        document.querySelectorAll("p")[1].innerHTML= person2 + "🙄";


    }else if (randomNum_player1 > randomNum_player2){
        document.querySelector("h1").innerHTML=person1 +" Wins 🚩";
        document.querySelectorAll("p")[0].innerHTML =person1 + " 😁";
        document.querySelectorAll("p")[1].innerHTML=person2 + " 😤";

    }else{
        document.querySelector("h1").innerHTML=person2 +" Wins 🚩";
        document.querySelectorAll("p")[0].innerHTML=person1 + " 😤";
        document.querySelectorAll("p")[1].innerHTML=person2 + " 😁";
    }
    

}


function resetFunction(){

    document.querySelector("h1").innerHTML="Ready ? Click on Play";
    document.querySelector(".img1").setAttribute("src", "images/dice1.png");
    document.querySelector(".img2").setAttribute("src", "images/dice1.png");

}


