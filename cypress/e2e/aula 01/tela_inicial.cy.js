
import telaInicial from '../../support/pageObejects/tela_inicial_page'

describe('Acessar a página do todoMVC', () => {

  it('Abrir o site', () => {

    cy.visit('https://todomvc.com/examples/vanillajs/');

    telaInicial.inputText()
    

 
    
  })
})