const buttonSearch = '.desktop-search > form > input';

Cypress.Commands.add('fazerPesquisa', (termo) => {
    cy.get('button#search-open').click();
    cy.get('.desktop-search > form > label > input').type(termo);
    cy.get(buttonSearch).click();
})

Cypress.Commands.add('fazerPesquisaVazia', () => {
    cy.get('button#search-open').click();
    cy.get(buttonSearch).click();
})

Cypress.Commands.add('comResultado', () => {
    cy.get('.archive-title');
})

Cypress.Commands.add('semResultado', () => {
    cy.get('.entry-title');
})