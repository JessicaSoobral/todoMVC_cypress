import telaInicial from '../../support/pageObejects/tela_inicial_page'

describe('Regressivo ToDo App', () => {


    context('Validar a tela Inicial', () => {

        beforeEach(() => {
            cy.visit('/');
            });

            it('Validar a area label de input de dados', () => {
                telaInicial.validarInput( 'What needs to be done?')
            });
  });

    context('Validar a adição de itens', () => {

        beforeEach(() => {
            cy.visit('/');
            });
            
            it('Adicionar mais de um item a lista', () => {
                var todoitem = ["dado1", "dado2", "dado3"];
            
                todoitem.forEach(function(item, indice, array) {
                    telaInicial.inputText(item);

                });
                telaInicial.validarContador(3)
            });
        

        
    
  });

    context('Validar a conclusão  de itens', () => {
        
        beforeEach(() => {
            cy.visit('/');
            var todoitem = ["dado1", "dado2", "dado3"];
            todoitem.forEach(function(item, indice, array) {
                telaInicial.inputText(item);
          });
    });
    
    it('Conclir itens na lista ToDo', () => {
             telaInicial.concluirItem();
             telaInicial.validarContador(2)
        });    
  });

    context('Validar ofiltro de aplicação', () => {
       
        beforeEach(() => {
            cy.visit('/');
            var todoitem = ["dado1", "dado2", "dado3"];
            todoitem.forEach(function(item, indice, array) {
                telaInicial.inputText(item);
            });
    
            telaInicial.concluirItem();
        });

        it('Validar a lista de itens ativos', () => {
            telaInicial.filtrarItens("Active");
            telaInicial.validarSizeToDo(2)     
        });

        it('Validar a lista de itens concluidos', () => {
            telaInicial.filtrarItens("Completed");
            telaInicial.validarSizeToDo(1)     
        }); 
  });

   context('Validar a remoção de itens', () => {

    beforeEach(() => {
        cy.visit('/');
        var todoitem = ["dado1", "dado2", "dado3"];
        todoitem.forEach(function(item, indice, array) {
            telaInicial.inputText(item);
        });
    });

    it('Deletar um item da lista', () => {
        telaInicial.deletarItens();
        telaInicial.validarSizeToDo(2);   
    });
   
  });

});