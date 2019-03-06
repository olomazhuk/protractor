import { browser, element, by } from 'protractor';

export class Photos {

    searchBar = element(by.css('div.search-bar'));
    h1Title = element(by.css('section.static-hero h1'));
    
    async OpenBrowser(url: string) {
        await browser.get(url);
    }

}
