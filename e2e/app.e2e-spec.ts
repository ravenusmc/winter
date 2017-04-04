import { WinterPage } from './app.po';

describe('winter App', function() {
  let page: WinterPage;

  beforeEach(() => {
    page = new WinterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
