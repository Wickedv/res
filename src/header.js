

//export const a = (document.createElement("button").textContent = "menu");


 function tabs () {
    //alert("hello")
    
    const html = document.getElementById("content")
    const add = document.createElement('div');
    const btn = document.createElement("button");
    const btn1 = document.createElement("button");
    const btn2 = document.createElement("button");


    btn.textContent = 'menu'
    btn1.textContent = 'contact'
    btn2.textContent = 'sub'

    add.append(btn, btn1, btn2)

    html.append(add);
   //  html.append(add.append(btn1));
   //  html.append(add.append(btn2));
}

export default tabs

