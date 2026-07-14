const links = document.querySelectorAll(".navlink a");

links.forEach(link => {

    link.addEventListener("click", function(){

        links.forEach(item => item.classList.remove("active"));

        this.classList.add("active");

    });

});
const topBtn = document.getElementById("topBtn");

window.onscroll = function(){

    if(document.documentElement.scrollTop > 300){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

}

topBtn.onclick = function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}
const form = document.querySelector("form");

form.addEventListener("submit", function(event){

    event.preventDefault();

    alert("Thank you! Your table has been reserved.");

    form.reset();

});
window.onload = function(){

    document.querySelector("#hero-image").style.transform = "translateX(0)";

}
const images = document.querySelectorAll(".gallery-container img");

images.forEach(img=>{

img.addEventListener("click",()=>{

alert("You selected this image.");

});

});
