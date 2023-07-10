const personagens = document.querySelectorAll('.personagem');

// Remove todas classes personagem-selecionado
personagens.forEach((personagem) => {
    personagem.classList.remove('selecionado');
})

// Adiciona classe personagem-selecionado com evento de entrada do mouse
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
    personagem.classList.add('selecionado');

// Evento de click para dispositivos de tela vertical
    if(window.innerWidth < 450) {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

// Remove classe personagem-selecionado com evento de saída do mouse
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseout', () => {
    personagem.classList.remove('selecionado');
    })
})

// Exibe imagem de personagem selecionado
const imagemPersonagemGrande = document.querySelector('.personagem-grande');
const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;

// Altera nome de personagem selecionado
const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');

// Altera descrição de personagem selecionado
const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
    })
})