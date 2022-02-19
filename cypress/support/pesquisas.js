const buttonSearch = 'button#search-open';
const inputSearch = '.desktop-search > form > input';

Cypress.Commands.add('fazerPesquisa', (termo) => {
    cy.get(buttonSearch).click();
    cy.get('.desktop-search > form > label > input').type(termo);
    cy.get(inputSearch).click();
})

Cypress.Commands.add('fazerPesquisaVazia', () => {
    cy.get(buttonSearch).click();
    cy.get(inputSearch).click();
})

Cypress.Commands.add('comResultado', () => {
    cy.get('.archive-title');
})

Cypress.Commands.add('semResultado', () => {
    cy.get('.entry-title');
})