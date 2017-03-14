import { Angular2spotifyPage } from './app.po';

describe('angular2spotify App', () => {
  let page: Angular2spotifyPage;

  beforeEach(() => {
    page = new Angular2spotifyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
