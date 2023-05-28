describe('ui-lib', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=bannercomponent--primary&args=text;')
  );
  it('should render the component', () => {
    cy.get('mfenx-banner').should('exist');
  });
});
