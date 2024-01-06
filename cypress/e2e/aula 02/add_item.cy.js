import telaInicial from '../../support/pageObejects/tela_inicial_page'

describe('Adicionar itens a lista ToDo', () => {

    beforeEach(() => {
        cy.visit('/');
      });

    it('Adicionar um item a lista', () => {
        telaInicial.inputText('dado1') 
      })

      it('Adicionar mais de um item a lista', () => {
        var todoitem = ["dado1", "dado2", "dado3"];
    
        todoitem.forEach(function(item, indice, array) {
            telaInicial.inputText(item);
        });
    });

});
