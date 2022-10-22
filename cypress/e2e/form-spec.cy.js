describe('sign up form testing', () => {
    before(() => {
      cy.visit('/signup')
    })
    it('email input spec', () => {
        cy.get('[data-testid="signup-email-input"] > .MuiInputBase-root > #standard-basic')
        .type("blah@test.com")
    })
    it('password input spec', () => {
        cy.get('[data-testid="signup-password-input"] > .MuiInputBase-root > #standard-basic')
        .type("blah4562")
    })
    it('password verification  input spec', () => {
        cy.get('[data-testid="signup-verifypassword-input"] > .MuiInputBase-root > #standard-basic')
        .should("exist")
    })
    it('first name input spec', () => {
        cy.get('[data-testid="signup-fName-input"] > .MuiInputBase-root > #standard-basic')
        .should("exist")
    })
    it('last name input spec', () => {
        cy.get('[data-testid="signup-lName-input"] > .MuiInputBase-root > #standard-basic')
        .should("exist")
    })
    it('submit form spec', () => {
        cy.get('[data-testid="signup-email-input"] > .MuiInputBase-root > #standard-basic')
        .type("blah@test.com")

        cy.get('[data-testid="signup-password-input"] > .MuiInputBase-root > #standard-basic')
        .type("blah4562")

        cy.get('[data-testid="signup-btn"]').click()
    })
    it('invalid email address spec', () => {
        cy.get('[data-testid="signup-email-input"] > .MuiInputBase-root > #standard-basic')
        .type("blah.com")
        cy.get('[data-testid="signup-btn"]').click()
    })
    it('breadcrumb spec', () => {
        cy.get('[data-testid="breadcrumb-/signup"]').should('have.text', 'Home / signup')
    })
})

describe('sign in form testing', () => {
    before(() => {
      cy.visit('/')
    })
    it('email input spec', () => {
        cy.get('[data-testid="signin-email-input"] > .MuiInputBase-root > #standard-basic')
        .type("blah@test.com")
    })
    it('password input spec', () => {
        cy.get('[data-testid="signin-password-input"] > .MuiInputBase-root > #standard-basic')
        .type("blah4562")
    })
    it('submit form spec', () => {
        cy.get('[data-testid="signin-email-input"] > .MuiInputBase-root > #standard-basic')
        .type("blah@test.com")

        cy.get('[data-testid="signin-password-input"] > .MuiInputBase-root > #standard-basic')
        .type("blah4562")

        cy.get('[data-testid="signin-btn"]').click()
    })
    it('invalid email address spec', () => {
        cy.get('[data-testid="signin-email-input"] > .MuiInputBase-root > #standard-basic')
        .type("blah.com")
        cy.get('[data-testid="signup-btn"]').click()
    })
    it('breadcrumb spec', () => {
        cy.get('[data-testid="breadcrumb-/signup"]').should.not('have.text', 'Home / signin')
    })
})