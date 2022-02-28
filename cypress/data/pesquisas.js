class Pesquisas {

    termoExistente(){

        return 'Resultados da busca por: Tesouro Direto';
    } 

    palavraChave(){

        return 'Resultados da busca por: Direto';
    }

    termoInexistente(){

        return 'Nenhum resultado';
    }

    semInformacao(){

        return 'Resultados da busca por: '
    }
}

export default new Pesquisas();
