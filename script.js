var alertaPersonalizado = document.createElement("div");
alertaPersonalizado.innerHTML = "Seja Bem Vindo";
alertaPersonalizado.style.backgroundColor = "blue";
alertaPersonalizado.style.color = "white";
alertaPersonalizado.style.padding = "10px";
alertaPersonalizado.style.position = "fixed";
alertaPersonalizado.style.top = "50%";
alertaPersonalizado.style.left = "50%";
alertaPersonalizado.style.borderRadius = "20px";
alertaPersonalizado.style.transform = "translate(-50%, -50%)";
alertaPersonalizado.style.zIndex = "9999";
document.body.appendChild(alertaPersonalizado);

setTimeout(function(){
    alertaPersonalizado.style.display = "none";
}, 2000);

