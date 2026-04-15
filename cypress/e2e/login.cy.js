describe('Teste de Login', () => {
  it('login com sucesso', () => {
    cy.visit('http://127.0.0.1:5500/login/login.html')

    cy.get('#login').type('admin')
    cy.get('#senha').type('admin')

    cy.get('input[type="submit"]').click()

    cy.on('window:alert', (msg) => {
      expect(msg).to.equal('Sucesso')
    })
  })
})