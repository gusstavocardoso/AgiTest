import homePageSearch from '../elements/home-page.js' 

Cypress.Commands.add('fazerPesquisa', (termo) => {
    cy.get(homePageSearch.buttonSearch()).click();
    cy.get(homePageSearch.inputText()).type(termo);
    cy.get(homePageSearch.inputSearch()).click();
})

Cypress.Commands.add('fazerPesquisaVazia', () => {
    cy.get(homePageSearch.buttonSearch()).click();
    cy.get(homePageSearch.inputSearch()).click();
})

Cypress.Commands.add('comResultado', () => {
    cy.get(homePageSearch.infoResult());
})

Cypress.Commands.add('semResultado', () => {
    cy.get(homePageSearch.emptyResult());
})