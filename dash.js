var state
setInterval(sendToServer,1000);
var lamp

function on1()
{
    lamp = true
    document.getElementById("luz1").src= "https://i.postimg.cc/T36v6Fmc/Lon1.png";
}

function off1()
{
    document.getElementById("luz1").src= "https://i.postimg.cc/Y0sZZy7Q/Loff.png";
    lamp = false
}

function sendToServer() {
    if (lamp == true){
        state = 1
    }
    else{
        state = 0
    }
    var KEY = "YCRAB6N4SOZT97ZY";
    //criar um objeto capaz de enviar dados via requisição HTTP GET
    const http = new XMLHttpRequest();
    //prepara um GET passando a váriavel lux como ultimo paramentro do link
    http.open("GET", "https://api.thingspeak.com/update?api_key="+ KEY +" &field1=0"+state);
    //envia um GET
    http.send();
    //quando a requisição retornar ele chama o console e imprime o valor gerado
    http.onload = console.log(http.responseText+" "+state)
}