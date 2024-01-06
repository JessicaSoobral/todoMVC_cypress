import telaInicial from '../../support/pageObejects/tela_inicial_page'

describe('Conclir itens na lista ToDo', () => {

    beforeEach(() => {
        cy.visit('/');
        var todoitem = ["dado1", "dado2", "dado3"];
        todoitem.forEach(function(item, indice, array) {
            telaInicial.inputText(item);
      });
    });

      it('Conclir itens na lista ToDo', () => {
            telaInicial.concluirItem();
        });   
    });


