// Lista com os resumos do seu projeto "O Futuro da Medicina"
const resumos = [
    "Este projeto analisa como a Inteligência Artificial revoluciona a saúde com diagnósticos rápidos e tratamentos personalizados. O objetivo é mostrar a tecnologia como aliada médica para salvar vidas, sem perder o foco na ética e no cuidado humano.",
    "O projeto estuda o impacto da Inteligência Artificial na saúde, mostrando como ela ajuda médicos a realizarem diagnósticos mais rápidos e tratamentos personalizados. O objetivo é destacar a tecnologia como aliada para salvar vidas.",
    "Este projeto estuda como a Inteligência Artificial está transformando a saúde através de diagnósticos rápidos, tratamentos personalizados e monitoramento preventivo, abordando também a importância da ética."
];

// Variável para controlar qual resumo está aparecendo na tela
let indice = 0;

// Selecionando os elementos do HTML que o JS vai modificar
const textoElemento = document.getElementById("resumo-texto");
const botao = document.getElementById("btn-mudar");

// Função para iniciar a página já exibindo o primeiro resumo da lista
function iniciarPagina() {
    if (textoElemento) {
        textoElemento.innerText = resumos[indice];
    }
}

// Executa a função assim que a página termina de carregar
iniciarPagina();

// Evento que escuta o clique do botão para mudar o texto
botao.addEventListener("click", () => {
    indice++; // Avança para o próximo resumo
    
    // Se chegar ao fim da lista, volta para o primeiro resumo (índice 0)
    if (indice >= resumos.length) {
        indice = 0;
    }
    
    // Atualiza o texto na tela
    textoElemento.innerText = resumos[indice];
});
