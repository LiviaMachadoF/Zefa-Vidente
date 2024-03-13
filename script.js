//quais são minhas variaveis? dados de entreda? dados de saída?
const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar = document.querySelector("#buttonPerguntar")

const respostas = [
    "Ah, meu bem, com certeza!",
    "Pois é, minha filha, parece que não dessa vez.",
    "Ói, aí tem coisa! Talvez seja melhor ficar de olho.",
    "Sim, sim, sim! As estrelas tão a brilhar pra você.",
    "Não bote fé não, que isso não tá com boa cara.",
    "Pode apostar que sim, meu anjo!",
    "Negócio tá meio embolado, mas acho que sim, viu?",
    "Não conte muito com isso, minha filha.",
    "Aí, sim, o universo tá conspirando a seu favor!",
    "Melhor não confiar muito, que as coisas tão meio reviradas.",
    "Talvez seja melhor esperar um pouco, mas quem sabe?",
    "Bote fé, que coisa boa tá se aproximando!",
    "Nem pense muito nisso, que tem coisa melhor vindo por aí.",
    "Ah, meu bem, com certeza não!",
    "Negativo, negativo, melhor dar uma volta nisso aí.",
    "Talvez seja bom pensar em outra direção, viu?",
    "Sim, sim, sim! A sorte tá do seu lado.",
    "Oh, não mesmo, meu anjo. Melhor se precaver.",
    "Acredite, que isso é mais certo que o canto do galo!",
    "Nem pensar, minha filha, não tá no momento certo.",
    "Pode apostar que sim, o destino tá sorrindo pra você.",
    "Nada feito, meu bem. Melhor procurar outra trilha.",
    "Ah, meu anjo, com certeza não tá nos planos.",
    "Aí tem coisa boa vindo por aí, viu? Sim, sim, sim!",
    "Não se deixe levar, minha filha. Tem coisa aí que não tá batendo."
  ];


//clicar no butao
function fazerPergunta(){

  if(inputPergunta.value == ""){
    alert("Digite sua pergunta!")
    return
  }

  buttonPerguntar.setAttribute("disabled", true)

  const pergunta = "<div>" + inputPergunta.value + "</div>"
//num aleatorio
  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)
    
  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

  elementoResposta.style.opacity = 1;
//sumir em 3s
  setTimeout(function() {
    elementoResposta.style.opacity = 0;
    buttonPerguntar.removeAttribute("disabled")
  }, 3000)
}