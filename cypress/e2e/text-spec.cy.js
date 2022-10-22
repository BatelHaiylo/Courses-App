describe('testing breadcrumb on all pages ', () => {
    it('courses page', () => {
        cy.visit('http://localhost:3000/courses')
        cy.get('[data-testid="breadcrumb-/courses"]').should('have.text', 'Home / courses')
      })
    it('about page', () => {
        cy.visit('http://localhost:3000/about')
        cy.get('[data-testid="breadcrumb-/about"]').should('have.text', 'Home / about')
      })
    it('pricing page', () => {
        cy.visit('http://localhost:3000/pricing')
        cy.get('[data-testid="breadcrumb-/pricing"]').should('have.text', 'Home / pricing')
      })
    it('community page', () => {
        cy.visit('http://localhost:3000/community')
        cy.get('[data-testid="breadcrumb-/community"]').should('have.text', 'Home / community')
      })
    it('contact page', () => {
        cy.visit('http://localhost:3000/contact')
        cy.get('[data-testid="breadcrumb-/contact"]').should('have.text', 'Home / contact')
      })
})