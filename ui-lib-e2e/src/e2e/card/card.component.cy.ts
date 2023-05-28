describe('ui-lib', () => {
  beforeEach(() => cy.visit('/iframe.html?id=cardcomponent--primary'));
  it('should render the component', () => {
    cy.get('mfenx-card').should('exist');
  });
});
