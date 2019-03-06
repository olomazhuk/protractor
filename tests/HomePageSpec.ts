import { HomePage } from '../pageObjects/HomePage';
import { async } from 'q';

describe('search elements on home page', () => {

  var homePage = new HomePage;

  beforeEach(() => {
   homePage.OpenBrowser('https://www.istockphoto.com/');
  });

  it('should find search bar on home page', async () => {

    expect(await homePage.searchBar.isDisplayed()).toBe(true);

  });

  it('should find header on home page', async () => {

    expect(await homePage.header.isDisplayed()).toBe(true);

  });

  it('should find footer on home page', async () => {

    expect(await homePage.footer.isDisplayed()).toBe(true);

  });

  it('should find content on home page', async () => {

    expect(await homePage.landingTiles.isDisplayed()).toBe(true);

  });

});