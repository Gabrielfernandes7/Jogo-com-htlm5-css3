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
    var velocidade = 5;
    var posicaoY = parseInt(Math.random() * 334);

    //GAME LOOP
    jogo.timer = setInterval(loop, 30);

    function loop() {
        movefundo();
        movejogador();
        moveinimigo1();
        moveinimigo2();
        moveamigo();
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

    function moveinimigo1() {
        posicaoX = parseInt($("#inimigo1").css("left"));
        $("#inimigo1").css("left", posicaoX - velocidade);
        $("#inimigo1").css("top", posicaoY);

        if (posicaoX <= 0) {
            posicaoY = parseInt(Math.random() * 334);
            $("#inimigo1").css("left", 694);
            $("#inimigo1").css("top", posicaoY);
        }
    }

    function inimigo2() {
        posicaoX = parseInt($("#inimigo2").css("left"));
        $("#inimigo2").css("left", posicaoX - 3);
        if (posicaoX <= 0) {
            $("#inimigo2").css("left", 775);
        }
    }

   function moveamigo() {
       posicaoX = parseInt($("#amigo").css("left"));
       $("amigo".css("left", posicao + 1));

       if (posicaoX > 906) {
           $("#amigo").css("left", 0);
       }
   }


} // fim da função