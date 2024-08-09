function escolherOpcao() {
    var opcao1 = document.querySelector("#input1").value
    var opcao2 = document.querySelector("#input2").value

    console.log(opcao1);

    var opcoes = [opcao1, opcao2]

    var escolhasAleatorias = opcoes[Math.floor (Math.random() * opcoes.length)]

    document.getElementById('resultado').innerHTML = 'o polvo escolheu: ' + escolhasAleatorias;
}