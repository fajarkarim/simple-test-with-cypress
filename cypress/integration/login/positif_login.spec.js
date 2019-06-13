context('Login Test', () => {
    beforeEach(() => {
        const url = 'localhost:3000';
        cy.visit(url)
    });

    it('should contains email error input, given a wrong email when submit button click', () => {
        cy.get('input#inputEmail')
            .type('lala@gmail.com')
            .should('have.value', 'lala@gmail.com');

        cy.get('input#inputPassword')
            .type('fajar').should('have.value', 'fajar');

        cy.get('button#loginButton')
            .click();
        cy.get('#errorEmail').should('contain', 'Email is invalid');
    })
})
