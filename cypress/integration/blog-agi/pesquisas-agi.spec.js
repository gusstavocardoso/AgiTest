/// <reference types="cypress" />

import Pesquisas from '../../data/pesquisas.js'

describe('Pesquisas agi', () => {
    beforeEach(() => {
        cy.visit('https://blogdoagi.com.br/')
    })

    it('Deve retornar pesquisa quando termo existente', () => {
        cy.fazerPesquisa('Tesouro Direto');
        cy.comResultado().should('have.text', Pesquisas.termoExistente());
    });

    it('Deve retornar pesquisa com palavra chave existente', () => {
        cy.fazerPesquisa('Direto');
        cy.comResultado().should('have.text', Pesquisas.palavraChave());
    });

    it('Não deve retornar pesquisa quando termo inexistente', () => {
        cy.fazerPesquisa('Pink Floyd');
        cy.semResultado().should('have.text', Pesquisas.termoInexistente()); 
    });

    it('Não deve retornar pesquisa sem passar informação', () => {
        cy.fazerPesquisaVazia();
        cy.comResultado().should('have.text', Pesquisas.semInformacao())
    });
});