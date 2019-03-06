import { Search } from '../pageObjects/Search';

describe('search photos', () => {

  var search = new Search;

  beforeEach(() => {
    search.OpenBrowser('https://www.istockphoto.com/');
  });

  it('should find auto photos results', async () => {

    await search.SetSearchPhraze('auto');

    await search.ClickSearchButton();

    expect(await search.h1SearchText.getText()).toEqual('Auto Pictures, Images and Stock Photos');

  });

  it('should not find any photos', async () => {

    await search.SetSearchPhraze('qqqq');

    await search.ClickSearchButton();

    expect(await search.zeroResultTitle.getText()).toEqual('Sorry, your search returned zero results for "qqqq"');

  });

});