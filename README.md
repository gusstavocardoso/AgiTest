# AgiTest
Testes de fluxos de pesquisa agi

**Pré-requisito**

* Node.js 
([Node.js](https://nodejs.org/en/))

**Projeto**

* Clonando o projeto
`git clone  https://github.com/gusstavocardoso/AgiTest.git`

* Instalando o projeto 
`npm install`

* Excutando os testes no test runner
`npm run cy:open`

* Excutando os testes no headless
`npm run cy:run`

**Cenários**
```
Funcionalidade: Pesquisas
        Sendo um cliente agi
        Quero pesquisar por termos ou palavras chave
        Para que eu possa encontrar as informações que preciso
        
        Esquema do cenário: Realizar pesquisas com a ferramenta de busca
                Dado que eu estou na home do Blog do Agi
                Quando eu informo um <termo ou palavra chave>
                E clico em pesquisar
                Então de devo ver o <resultado da pesquisa>
                
                Exemplos: 
                        |termo ou palavra chave     |resultado da pesquisa                      |
                        |'Tesouro Direto'           |'Resultados da busca por: Tesouro Direto'  |
                        |'Direto'                   |'Resultados da busca por: Direto'          |
                        |'Pink Floyd'               |'Nenhum resultado'                         |
                        |                           |'Resultados da busca por: '                |
```
**Estruta do Projeto**

```
C:.
│   .gitignore
│   cypress.json
│   package-lock.json
│   package.json
│   README.md
│
└───cypress
    ├───data
    │       pesquisas.js
    │       url.js
    │
    ├───fixtures
    │       example.json
    │
    ├───integration
    │   └───blog-agi
    │           pesquisas-agi.spec.js
    │
    ├───plugins
    │       index.js
    │
    ├───support
    │       commands.js
    │       index.js
    │       pesquisas.js
    │
    └───videos
        └───blog-agi
                pesquisas-agi.spec.js.mp4
```
