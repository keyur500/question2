
const image = document.getElementById("myImg");

const myDiv = document.getElementById("myDiv");

const allh1 = document.querySelector("h1");



image.addEventListener("mouseover", e => {
    image.src = './images/img2.jpg';
//    console.log("Mouse in");
    
    var h1Tag = document.createElement("h1");      
    h1Tag.innerHTML = "Good Luck On Your Final Exam!";                   
    myDiv.appendChild(h1Tag);    


});

image.addEventListener("mouseout", e => {
    image.src = './images/img1.jpg';
    document.body.style.background = "#C0DE25";
});



