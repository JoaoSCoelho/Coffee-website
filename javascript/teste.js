function addTipo() {
  const lastTipoElement = document.getElementsByClassName('tipos').length

  const tipoElement = document.createElement('div')
  const inputNameTipoElement = document.getElementById('name-tipo')
  tipoElement.setAttribute('class', 'tipos')
  tipoElement.setAttribute('onclick', 'displayCommands(' + lastTipoElement + ')')

  const textNameTipoElement = document.createTextNode(inputNameTipoElement.value)
  const nameTipoElement = document.createElement('strong')

  const divQtdComandosDoTipo = document.createElement('div')
  divQtdComandosDoTipo.setAttribute('class', 'qtd-comandos-do-tipo')

  nameTipoElement.appendChild(textNameTipoElement)
  nameTipoElement.appendChild(divQtdComandosDoTipo)

  tipoElement.appendChild(nameTipoElement)

  const divComandosDoTipo = document.createElement('div')
  divComandosDoTipo.setAttribute('class', 'comandos-do-tipo')
  divComandosDoTipo.setAttribute('onclick', 'manterAberto(' + lastTipoElement + ')')

  const tableElement = document.createElement('table')

  divComandosDoTipo.appendChild(tableElement)

  tipoElement.appendChild(divComandosDoTipo)

  const sectionCorpoElement = document.getElementById('corpo')
  sectionCorpoElement.appendChild(tipoElement)

  definirQtdComandos();
}

function addComando() {
  const indexTipoParaAddComando = Number(document.getElementById('add-comando-in-index').value) || document.querySelectorAll('.tipos').length

  const tipoParaAddComando = document.querySelectorAll('.tipos')[indexTipoParaAddComando - 1].querySelector('.comandos-do-tipo table')

  const ulElement = document.createElement('ul')
  const liEsqElement = document.createElement('li')
  liEsqElement.setAttribute('class', 'li-esq')

  const liEsqDivElement = document.createElement('div')

  const nameComandoPElement = document.createElement('p')
  nameComandoPElement.setAttribute('class', 'name-comando')

  function gerarPrefixoElement() {
    const spanPrefixElement = document.createElement('span')
    spanPrefixElement.setAttribute('class', 'prefix')
    const prefixTextNode = document.createTextNode('_')
    spanPrefixElement.appendChild(prefixTextNode)

    return spanPrefixElement
  }

  const nameComandoValueInput = document.querySelector('#name-comando').value
  const nameComando = document.createTextNode(nameComandoValueInput)

  nameComandoPElement.appendChild(gerarPrefixoElement())
  nameComandoPElement.appendChild(nameComando)

  liEsqDivElement.appendChild(nameComandoPElement)

  const aliasesComandoPElement = document.createElement('p')
  aliasesComandoPElement.setAttribute('class', 'aliases-comando')

  const aliasesComandoValueInput = document.querySelector('#aliases-comando').value
  const aliasesComandoArr = aliasesComandoValueInput.split(', ')

  aliasesComandoArr.forEach(element => {
    aliasesComandoPElement.appendChild(gerarPrefixoElement())

    const aliaseTextNode = document.createTextNode(element+', ')

    aliasesComandoPElement.appendChild(aliaseTextNode)
    console.log(aliasesComandoPElement)
  });

  liEsqDivElement.appendChild(aliasesComandoPElement)

  liEsqElement.appendChild(liEsqDivElement)

  const liDirElement = document.createElement('li')
  liDirElement.setAttribute('class', 'li-dir')

  const descComandoPElement = document.createElement('p')
  descComandoPElement.setAttribute('class', 'desc-comando')

  const descComandoInputValue = document.querySelector('#desc-comando').value

  descComandoPElement.innerHTML = descComandoInputValue

  liDirElement.appendChild(descComandoPElement)

  ulElement.appendChild(liEsqElement)
  ulElement.appendChild(liDirElement)

  tipoParaAddComando.appendChild(ulElement)

  definirQtdComandos();
}