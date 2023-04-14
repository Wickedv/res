

//export const a = (document.createElement("button").textContent = "menu");


 function tabs () {
    //alert("hello")
    const html = document.getElementById("content")
    const btn = document.createElement("button");

    btn.textContent = 'menu'

     html.append(btn);
}

export default tabs

