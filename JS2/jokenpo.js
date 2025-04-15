(function jokenpo() {
    console.log("Escolha sua jogada:\n" +
                "1 - Pedra\n" +
                "2 - Papel\n" +
                "3 - Tesoura\n" )

    let jogador = parseInt(prompt("Escolha um numero de 1 a 3."))
    do{
        if(jogador < 0 || jogador > 3 || jogador === 0 || isNaN(jogador)){
            alert("Escolha inválida!")
            jogador = parseInt(prompt("Escolha um numero de 1 a 3."))
        }
    }while(isNaN(jogador));

    let computador = Math.floor((Math.random()*3) + 1);

    switch (computador){
        case 1: console.log("O computador jogou Pedra");break;
        case 2: console.log("O computador jogou Papel");break;
        case 3: console.log("O computador jogou Tesoura");break;
    }


    let flag = true
    let score = 0;

    while(flag){
        if(
            (jogador === 1 && computador === 3) ||
            (jogador === 2 && computador === 1) ||
            (jogador === 3 && computador === 2)
        ){
            score++
            console.log("Você ganhou!");
            jogador = parseInt(prompt("Escolha novamente um numero de 1 a 3."))
        }else if(jogador === computador){
            console.log("O jogo empatou!")
            jogador = parseInt(prompt("Escolha novamente um numero de 1 a 3."))
        }else{
            flag = false
        }
    }

    console.log(`Você perdeu! sua pontuação foi de ${score}!`)

})();