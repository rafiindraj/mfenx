describe('ui-lib', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=mandbadgepillcomponent--primary&args=text;linkImage;type;fontStyle;'
    )
  );
  it('should render the component', () => {
    cy.get('mfenx-mand-badge-pill').should('exist');
  });
});
