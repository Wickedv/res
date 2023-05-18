function home() {
  
  //need to add basic info about the restaurant here
  const html = document.getElementById("content");
  const add = document.createElement("div");
  const h1 = document.createElement("h1");
  const btn1 = document.createElement("button");
  const btn2 = document.createElement("button");
  const h = document.createElement("h1");
  const p = document.createElement("p");

  h1.textContent = "Welcome to the best restaurant in the world";
  html.append(h1);
  add.append(h1);
  html.append(h1);
  
  
}

export default home;
