const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "uma garota forte e corajosa tera que enfrentrar um dragão de 3 cabeças, para salvar o reino onde mora,  sozinha sem nenhuma ajuda e receber o mérito por conta propria ou ela podera recorrer a um feitiçeiro poderoço para ajuda-la sem sua misão .... e ai oque ela deve fazer ?",
        alternativas: [
            {
                texto: "lutar sozinha",
                afirmacao: "e tr sua propria vitoria "
            },
            {
            
            texto: "procurar ajuda do feitiçeiro",
            afirmacao: "e ter um companheiro"
            }
        ]
    },
    {
        enunciado: "mesmo sabendo qu poderia vencer sozinha o dragão, ela vai em direção a o  mago e pedir sua ajuda para derrotaro dragão , a cavaleira e o mago seguemjuntos para a caverna onde e o lar do terrivel drãgão de 3 cabeças a corajosa cavaleira tem que decidir se ira entrar na cavernar e enfrentará o dragão hoje ou se ira embora e ira elaborar um plano de batalha...eai oque ela deve fazer",
        alternativas: [
            {
                texto: "entrara na caverna hoje e agora ",
                afirmacao: "sem um plano e ter rico de morte porem tera uma aventura epica"
            },
            {
                texto: "ira embora para elaborar um plano ",
                afirmacao: "e voltar no dia seguinte "
            }
        ]
    },
    {
        enunciado: " pos decidir oque fazer o mago imteroompe os planos da cavaleira e a ajuda a elaborar uma maneira de entrar na caverna, ao entrar  na caverna , a cavaleira e o mago são surpreendidos por um bafo ardente indo em sua diresão com uma velocidade incrivel porem a cavaleira desvia desse ataque e se esconde atras das pedras a incrivel cavaleira pode sair de seu esconderijo e atacar o drgãoou pode elaborar rapidamente uma estrategia para vencer o drgão",
        alternativas: [
            {
                texto: "elaborar uma estratagia .",
                afirmacao: "pensar rapido para não morrer."
            },
            {
                texto: "atacar rapidamente.",
                afirmacao: "ser fodastica e teme o loco."
            }
        ]
    },
    {
        enunciado: " a cavaleira não so pensa em uma estrategia rapidamente como ataca o dragão ao mesmo tempo, porem se machuca com um dos golpes do terrivel dragão. a cavaleira pode pedir ajuda para o feitiçeiro curala ou ela pode ter orgulho e tular assim mesmo . e ai oque ela deve fazer?",
        alternativas: [
            {
                texto: "ela pede ajuda para o feitiçeiro e ela a ajuda",
                afirmacao: " por er muito orgulhosa"
            },
            {
                texto: " ela recusa a ajuda do feitiçeiro e ele fala foda-se e a ajuda mesmo assim",
                afirmacao: " da risada ma recebe a ajua precisa"
            }
        ]
    },
    {
        enunciado: "apos ter a ajuda do feitiçeiro, eles lutam em conjunto para derrotar o temido dragãoe dão o golpe final em conjunto. apos isso eles descobrem que na caver na diversos tesouro e pensam oque devem fazer com isso , eai oque ela deve fazer ? , levar o tesouro para o rei da vila ou dar o tesouro para o povo ? ",
        alternativas: [
            {
                texto: "eles levam o tesoupara o rei e ele commpartilha com o povo ",
                afirmacao: " ganham titulo nobres e servem a coroa agora  "
            },
            {
                texto: "ele compartilham direto com o povo, o rei fica sabendo e n faz nada pois acha essa atitude nobre",
                afirmação: "iram o heroi da aldeia"
            }
        ]
    }
]


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = " apos isso a cavelaira percebeu que pedir ajuda n mata ngm e apos ter recebido a ajuda do feitiçeiro , tano a cavaleira quanto ele, viraram menbros importantes para a corte real";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();