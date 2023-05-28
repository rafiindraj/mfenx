describe('ui-lib', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=mandbadgecomponent--primary&args=type;')
  );
  it('should render the component', () => {
    cy.get('mfenx-mand-badge').should('exist');
  });
});
