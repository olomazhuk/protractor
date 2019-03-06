import { browser, element, by } from 'protractor';

export class HomePage {

    searchBar = element(by.css('div.search-bar'));
    header = element(by.id('site-header'));
    footer = element(by.id('footer'));
    landingTiles = element(by.css('section.landing-tiles'));
    
    async OpenBrowser(url: string) {
        await browser.get(url);
    }

}
