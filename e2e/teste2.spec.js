describe('Teste de Sucesso - Formulário de Contato', () => {
    it('Deve enviar mensagem com e-mail válido', () => {
      cy.visit('http://127.0.0.1:8080/index.html');
      cy.get('input[name="nome"]').type('Teste');
      cy.get('input[name="email"]').type('rochele.diniz@gmail.com');
      cy.get('textarea[name="mensagem"]').type('Mensagem de teste.');
      cy.get('button[type="submit"]').click();
      cy.get('.sucesso').should('be.visible').and('contain.text', 'Mensagem enviada com sucesso');
    });
  });
  
  describe('Teste de Falha - Formulário de Contato', () => {
    it('Deve exibir erro para e-mail inválido', () => {
      cy.visit('http://127.0.0.1:8080/index.html');
      cy.get('input[name="nome"]').type('Teste');
      cy.get('input[name="email"]').type('teste@teste.com');
      cy.get('textarea[name="mensagem"]').type('Mensagem de teste.');
      cy.get('button[type="submit"]').click();
      cy.get('.erro-email').should('be.visible').and('contain.text', 'E-mail inválido');
    });
  });


  