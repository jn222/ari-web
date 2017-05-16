import { AriWebPage } from './app.po';

describe('ari-web App', () => {
  let page: AriWebPage;

  beforeEach(() => {
    page = new AriWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
