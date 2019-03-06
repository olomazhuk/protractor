import { Photos } from './../pageObjects/Photos';
import { async } from 'q';

describe('search elements on home page', () => {

  var photosPage = new Photos;

  beforeEach(() => {
    photosPage.OpenBrowser('https://www.istockphoto.com/stock-photos');
  });

  it('should find search bar on photos page', async () => {

    expect(await photosPage.searchBar.isDisplayed()).toBe(true);

  });

  it('h1 should be \"Browse stock photos and royalty-free images\"', async () => {

    expect(await photosPage.h1Title.getText()).toEqual('Browse stock photos and royalty-free images');

  });

});