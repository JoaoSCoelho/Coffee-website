let stts = true;
function displayCommands(index) {
  const comandosDoTipo = document.getElementsByClassName('comandos-do-tipo')[index]
  if (comandosDoTipo.style.display === 'block' && stts) {
    comandosDoTipo.style.display = 'none'
  } else {
    comandosDoTipo.style.display = 'block'
    stts = true
  }
}
function manterAberto(index) {
  stts = false
}

function definirQtdComandos() {
  const tiposElements = document.querySelectorAll('.tipos')
  for (tipo of tiposElements) {
    const contadorElement = tipo.querySelector('strong .qtd-comandos-do-tipo')
    const qtdComandos = tipo.querySelectorAll('.comandos-do-tipo ul')

    contadorElement.innerHTML = qtdComandos.length
  }
}

definirQtdComandos();