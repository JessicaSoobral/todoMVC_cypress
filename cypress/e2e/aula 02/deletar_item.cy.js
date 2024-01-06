import telaInicial from '../../support/pageObejects/tela_inicial_page';

describe('Deletar itens da lista', () => {
    
    beforeEach(() => {
        cy.visit('/');
        var todoitem = ["dado1", "dado2", "dado3"];
        todoitem.forEach(function(item, indice, array) {
            telaInicial.inputText(item);
        });

    });

    it('Deletar um item da lista', () => {
        telaInicial.deletarItens();
    });

});
