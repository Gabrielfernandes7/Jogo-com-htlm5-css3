function start(){
    //Inicio do jogo
    $("#inicio").hide();

    $("fundoGame").append("<div id='jogador' class='anima1></div>");
    $("fundoGame").append("<div id='inimigo1' class='anima2'></div>");
    $("fundoGame").append("<div id='inimigo2'></div>");
    $("fundoGame").append("<div id='amigo' class='anima3'></div>");

    var TECLA = {
        W: 87,
        S: 83,
        D: 68
    };

    jogo.pressionou = [];

    //Verifica se o usuario pressionou alguma tecla

    $(document).keyup(function (e) {
        jogo.pressionou[e.wich] = true;
    });

    $(document).keydown(function (e) {
        jogo.pressionou[e.wich] = false;
    });

    //Principais variáveis do jogo
    var jogo = {};
    

    //GAME LOOP
    jogo.timer = setInterval(loop, 30);

    function loop() {
        movefundo();
        movejogador();
    }

    //Função que movimenta o jogo

    function movefundo() {
        esquerda = parseInt($("#fundoGame").css("background-position"));
        $("fundoGame").css("background-position", esquerda - 1);
    }//Move fundo


    function movejogador() {
        if (jogo.pressionou[TECLA.W]) {
            var topo = parseInt($("#jogador").css("top"));
            $("#jogador").css("top", topo - 10);

            if (topo <= 0) {
                $("#jogador").css("top", topo + 10);
            }
        }

        if (jogo.pressionou[TECLA.S]) {
            var topo = parseInt($("#jogador").css("top"));
            $("#jogador").css("top", topo + 10);

            if (topo >= 434) {
                $("jogador").css("top", topo - 10);
            }
        }

        if (jogo.pressionou[TECLA.D]) {
            //Chama a função disparo
        }
    }

    

   


} // fim da função