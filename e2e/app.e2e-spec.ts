import { RetainAppUniversalPage } from './app.po';

describe('retain-app-universal App', function() {
  let page: RetainAppUniversalPage;

  beforeEach(() => {
    page = new RetainAppUniversalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
