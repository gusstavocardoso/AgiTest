class HomePageSearch {

    buttonSearch(){
        return 'button#search-open';
    }

    inputSearch(){
        return '.desktop-search > form > input';
    }

    inputText(){
        return '.desktop-search > form > label > input';
    }

    infoResult(){
        return '.archive-title';
    }

    emptyResult(){
        return '.entry-title';
    }
}

export default new HomePageSearch();