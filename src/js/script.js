// busca o elemento HTML do botão das notas
const notas = document.querySelectorAll(".btn-avaliacao");
// busca o elemento HTML do botão de enviar
const confirmarBotao = document.getElementById("confirmar");
// busca o elemento HTML do span da nota
const avaliacaoSpan = document.getElementById("numAvaliacao");
// busca o elemento HTML do cartão de nota
const mainContainer = document.querySelector(".avaliacao-container");
// busca o elemento HTML do cartão de agradecimento
const agradecimentoContainer = document.querySelector(".agradecimento-container");

// pega a nota selecionada
let notaSelecionada;

notas.forEach(nota => {
    // identifica o clique do usuário na nota
    nota.addEventListener('click', () => {
        // guarda valor da nota selecionada
        notaSelecionada = nota.textContent;
        // mostra valor guardado da nota selecionada
        avaliacaoSpan.textContent = notaSelecionada;
    });
});

// identificar o clique do usuário no enviar
confirmarBotao.addEventListener('click', () => {
    if (notaSelecionada) { // caso a nota seja selecionada
        // busca o cartão de nota e esconder
        mainContainer.classList.add('hidden');
        // mostra o cartão de agradecimento
        agradecimentoContainer.classList.remove('hidden');
    } else { // caso não tenha nota selecionada
        // mostra um aviso
        alert('Por favor, selecione uma nota.');
    }
});