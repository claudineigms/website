function mudatema(){
    var botao = document.getElementById("botao_tema")
    if (botao.value == "dark"){
       botao.innerHTML= "Alterar Tema<br>Dark"
       botao.value = "white" 
    }
    else{botao.innerHTML= "Alterar Tema<br>White"
        botao.value = "dark"}

    document.body.classList.toggle("white");

}
function teste(){
    alert("oi :3")
}