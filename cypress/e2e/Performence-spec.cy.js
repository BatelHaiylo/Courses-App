describe('empty spec', () => {
    before(() => {
      cy.visit('/')
    })
    it('load app', () => {
    })
    it('check red header', () => {
      cy.get('[data-testid="app-comp-home-h1"]')
      .contains("Home")
    })
})