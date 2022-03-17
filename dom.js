/*console.log(document);
console.log(document.body);
console.log(document.title);
console.log(document.head);
*/

/* Kohne metodlar 
const h1 = document.getElementById("basliq");
console.log(h1);
const img = document.getElementsByTagName("img");
console.log(img);
const p = document.getElementsByClassName("text");
console.log(p);
*/
/*
const images = document.querySelectorAll(".text");
console.log(images);
const img = document.querySelector("img");
console.log(img);

//p.style.color = "#567897";

p.addEventListener("mouseover", function () {
  p.style.color = "tomato";
});

p.addEventListener("mouseout", function () {
  p.style.color = "black";
});

const catImg = document.querySelector("#cat-img");
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  catImg.src =
    "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";
});
*/

const p = document.querySelector(".text");
console.log(p.getAttribute("data-ad"));
p.setAttribute("data-ad", "metn");
console.log(p.classList);
//p.classList.add("red-text");
p.classList.toggle("red-text");
p.classList.remove("green-text");
