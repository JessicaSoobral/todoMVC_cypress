const ele = require ('../elements/tela_inicial_elements').ELEMENTS
const concluirItem = require ('../elements/tela_inicial_elements').ITENS
const filtrarItens = require ('../elements/tela_inicial_elements').FILTROS

class telaInicial {

inputText(dado){
    cy.get(ele.inputToDo).type(dado).type('{enter}')   
}

validarInput(texto){
    cy.get(ele.inputToDo)
    .should('have.attr', 'placeholder')
    .and('include', texto)
}

concluirItem(){
cy.get(concluirItem.buttonConcluirItem)
.first()
.click()
}

filtrarItens(menu){   
cy.get(filtrarItens.filtroToDo)
.contains(menu)
.and('be.visible')
.click()
}

deletarItens(){
    cy.get(concluirItem.listaItens)
    .first()
    .find('button')
    .invoke('show')
    .click()    
}

validarContador(numero){
    cy.get(filtrarItens.contador)
    .find('strong')
    .should('have.text', numero)
}

validarSizeToDo(numero){
    cy.get(concluirItem.validarListaItens)
    .should('have.length', numero)
}
}

export default new telaInicial();