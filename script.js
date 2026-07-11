// Portfolio Loaded
console.log("Shivam Portfolio Loaded");

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener("click", function(e){
e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){
target.scrollIntoView({
behavior:"smooth"
});
}

});
});

// Navbar Shadow on Scroll

window.addEventListener("scroll",()=>{

const nav=document.querySelector(".navbar");

if(window.scrollY>50){

nav.style.boxShadow="0 5px 25px rgba(0,0,0,.5)";
nav.style.background="rgba(0,0,0,.92)";

}else{

nav.style.boxShadow="none";
nav.style.background="rgba(0,0,0,.75)";

}

});

// Reveal Animation

const revealItems=document.querySelectorAll("section");

const reveal=()=>{

revealItems.forEach(item=>{

const top=item.getBoundingClientRect().top;

if(top<window.innerHeight-120){

item.style.opacity="1";
item.style.transform="translateY(0px)";

}

});

};

window.addEventListener("scroll",reveal);

reveal();
// Hero Fade Animation

const hero=document.querySelector(".hero");

window.addEventListener("scroll",()=>{

let value=window.scrollY;

hero.style.opacity=1-value/700;

});

// Button Hover Effect

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});

// Footer Year

const footer=document.querySelector("footer p");

if(footer){

footer.innerHTML="© "+new Date().getFullYear()+" Shivam Singh Rawat • All Rights Reserved";

}

console.log("Portfolio Ready 🚀");
