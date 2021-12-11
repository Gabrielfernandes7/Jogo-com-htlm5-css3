function start(){
    //Inicio do jogo
    $("#inicio").hide();

    $("fundoGame").append("<div id='jogador' class='anima1></div>");
    $("fundoGame").append("<div id='inimigo1' class='anima2'></div>");
    $("fundoGame").append("<div id='inimigo2'></div>");
    $("fundoGame").append("<div id='amigo' class='anima3'></div>");

    //Principais variáveis do jogo
    var jogo = {};
    //GAME LOOP
    jogo.timer = setInterval(loop, 30);

    function loop() {
        movefundo()
    }
} // fim da função
