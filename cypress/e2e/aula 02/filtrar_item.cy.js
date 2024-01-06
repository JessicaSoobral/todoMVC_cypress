import telaInicial from '../../support/pageObejects/tela_inicial_page';

describe('Validar filtros da aplicação após adição de itens', () => {
    
    beforeEach(() => {
        cy.visit('/');
        var todoitem = ["dado1", "dado2", "dado3"];
        todoitem.forEach(function(item, indice, array) {
            telaInicial.inputText(item);
        });

        telaInicial.concluirItem();
    });

    it('Filtrar itens ativos', () => {
        telaInicial.filtrarItens("Active");
    });

    it.skip('Filtrar itens inativos', () => {
        telaInicial.filtrarItens("");    });

});
