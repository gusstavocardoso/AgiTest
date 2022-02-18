Cypress.Commands.add('fazerPesquisa', (termo) => {
    cy.get('button#search-open').click();
    cy.get('.desktop-search > .search-form > label > .search-field').type(termo);
    cy.get('.desktop-search > .search-form > .search-submit').click();
})

Cypress.Commands.add('fazerPesquisaVazia', () => {
    cy.get('button#search-open').click();
    cy.get('.desktop-search > .search-form > .search-submit').click();
})

Cypress.Commands.add('comResultado', () => {
    cy.get('.archive-title');
})

Cypress.Commands.add('semResultado', () => {
    cy.get('.entry-title');
})