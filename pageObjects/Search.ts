import { browser, element, by } from 'protractor';

export class Search {

    searchInput = element(by.id('search-phrase'));
    searchButton = element(by.css('button.search-bar__submit'));
    h1SearchText = element(by.css('section.category-title h1'));
    zeroResultTitle = element(by.id('zero-result-title'));
    
    async OpenBrowser(url: string) {
        await browser.get(url);
    }

    async SetSearchPhraze(phraze: string) {
        await this.searchInput.sendKeys(phraze);
    }

    async ClickSearchButton() {
        await this.searchButton.click();
    }

}
