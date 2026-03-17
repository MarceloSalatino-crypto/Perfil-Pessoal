// Esse script cria um efeito de "digitação" no seu cargo
// Como se alguém estivesse digitando ao vivo

const cargo = document.querySelector('.cargo');
// querySelector busca o primeiro elemento com a classe 'cargo'

const textos = [
  'Engenharia de Software · Dev em formação',
  'Apaixonado por Python 🐍',
  'Aprendendo JavaScript & TypeScript ⚡',
  'Buscando meu primeiro estágio 🚀'
];
// Array com os textos que vão aparecer um por um

let textoAtual = 0;
// Índice do texto que está sendo exibido agora
// Começa em 0 (primeiro item do array)

let charAtual = 0;
// Índice do caractere que está sendo digitado

let deletando = false;
// Controla se está digitando ou apagando

function digitar() {
  const texto = textos[textoAtual];
  // Pega o texto atual pelo índice

  if (!deletando) {
    // Se não está deletando, adiciona uma letra
    cargo.textContent = texto.substring(0, charAtual + 1);
    // substring(0, N) pega do início até a posição N
    charAtual++;

    if (charAtual === texto.length) {
      // Se chegou no final do texto, espera 2s e começa a deletar
      setTimeout(() => deletando = true, 2000);
    }
  } else {
    // Se está deletando, remove uma letra
    cargo.textContent = texto.substring(0, charAtual - 1);
    charAtual--;

    if (charAtual === 0) {
      // Se apagou tudo, passa pro próximo texto
      deletando = false;
      textoAtual = (textoAtual + 1) % textos.length;
      // % textos.length faz voltar pro início quando chegar no último
    }
  }

  const velocidade = deletando ? 50 : 100;
  // Deleta mais rápido que digita — parece mais natural
  
  setTimeout(digitar, velocidade);
  // Chama a função de novo após o delay — cria o loop
}

digitar();
// Inicia o efeito quando a página carrega