import { Wcrng2Page } from './app.po';

describe('wcrng2 App', function() {
  let page: Wcrng2Page;

  beforeEach(() => {
    page = new Wcrng2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
