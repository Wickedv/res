import "./style.css";
import tabs from "./header.js";
const pic = 
"https://imgs.search.brave.com/Tix3xdQoDghjS2mYFv4g8ViLtZfIeYqaPw9dFtl2iHs/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5R/UWZOUTYwTzR4WmhR/aGowaFllWjdnSGFF/OCZwaWQ9QXBp";
const html = document.getElementById("content");

tabs()

const mess = document.createElement("h1");
const img = document.createElement("img");
img.src = pic;
mess.textContent = "hello to our establishment";
html.appendChild(mess);
html.appendChild(img);



const p = document.createElement("p");
const h1 = document.createElement("h1");
// const btn = document.createElement("button");

h1.textContent = "what the heck";
// btn.textContent = 'menu'
html.appendChild(h1)
