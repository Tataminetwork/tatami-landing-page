import { TatamiLandingPagePage } from './app.po';

describe('tatami-landing-page App', function() {
  let page: TatamiLandingPagePage;

  beforeEach(() => {
    page = new TatamiLandingPagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
