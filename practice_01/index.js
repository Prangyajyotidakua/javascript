document.querySelector("h1").innerHTML = "Good Morning";
document.querySelector("h1").style.color = "red"; //red
document.getElementsByTagName("li").length;//3
//id selector
document.getElementById("title1").innerHTML="Good Bye";

document.querySelector("#title2").style.color = "Yellow";

document.querySelector(".btn").style.color="green";

document.querySelector("li a").innerHTML= "GitHub"; //1st one

document.querySelectorAll("#list .item");//select all the list item

document.querySelector("#list .item");// select only the first one

document.querySelectorAll("#list .item") [2].style.color = "blue";//blue

document.querySelector("#list p"); //<p>hi ! my name is prangya jyoti dakua </p>

document.querySelector("li a").style.color = "red";//firt one is changed

document.querySelector("button").style.backgroundColor = "black";

document.querySelector("button").classList.add("invisible"); //invisible is class name 

document.querySelector("button").classList.remove("invisible");

document.querySelector(".btn").classList.toggle("invisible");

document.querySelector("h1").classList.add("bg-color");

document.querySelector(".greet").textContent = "good morning everyone";//only the content ignore the content

document.querySelector("a").getAttribute("href");
document.querySelector("a").setAttribute("href" , "https://www.instagram.com");

