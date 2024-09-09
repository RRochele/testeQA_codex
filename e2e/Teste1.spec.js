describe('Teste do Banner da Página Inicial', () => {
  it('Deve exibir uma imagem no banner sem erros', () => {
    // Usando a URL do servidor local
    cy.visit('http://127.0.0.1:8080/index.html');

    cy.get('#banner').should('be.visible');

    cy.window().then((win) => {
      const stub = cy.stub(win.console, 'error');
      cy.visit('http://127.0.0.1:8080/index.html');
      cy.wrap(stub).should('not.be.calledWithMatch', /ERR_FILE_NOT_FOUND/);
    });

    cy.get('#banner img').should('have.attr', 'src').and('not.include', 'file:///');
  });
});