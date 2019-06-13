context('Login Test', () => {
    beforeEach(() => {
        const url = 'localhost:3000';
        cy.visit(url)
    });

    it('should have two inputs and user can type on it', () => {
        cy.get('input#inputEmail')
            .type('lala@gmail.com')
            .should('have.value', 'lala@gmail.com');

        cy.get('input#inputPassword')
            .type('fajar').should('have.value', 'fajar');
    });

    it('should contains email and password error input, when given empty email and password', () => {
        cy.get('button#loginButton')
            .click();

        cy.get('#errorEmail').should('contain', 'Email cannot be empty');
        cy.get('#errorPassword').should('contain', 'Password cannot be empty');
    });

    it('should contains email format error, when given wrong format of email', () => {
        cy.get('input#inputEmail')
            .type('lala');
        cy.get('input#inputPassword')
            .type('fajar').should('have.value', 'fajar');

        cy.get('button#loginButton')
            .click();

        cy.get('#errorEmail').should('contain', 'Invalid Email Format');
    });

    it('should can use enter to submit login information', () => {
        cy.get('input#inputEmail')
            .type('{enter}');

        cy.get('#errorEmail').should('contain', 'Email cannot be empty');
        cy.get('#errorPassword').should('contain', 'Password cannot be empty');
    });

    it('should contains email is invalid or password is invalid, when given wrong email or password', () => {
        cy.get('input#inputEmail')
            .type('xaview@gmail.com');
        cy.get('input#inputPassword')
            .type('fajar');

        cy.get('button#loginButton')
            .click();

        cy.get('#errorEmail').should('contain', 'Email is invalid');
        cy.get('#errorPassword').should('contain', 'Password is invalid');
    });

    it('should go to /dashboard when login was successful', () => {
        cy.get('input#inputEmail')
            .type('fajar@gmail.com');
        cy.get('input#inputPassword')
            .type('fajar');
        cy.get('button#loginButton')
            .click();

        cy.url().should('include', '/dashboard');
    })

});
