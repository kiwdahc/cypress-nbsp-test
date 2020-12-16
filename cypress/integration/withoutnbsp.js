// loads TypeScript definition for Cypress
// and "cy.runExample" custom command
/// <reference types="@cypress/fiddle" />

const helloTest = {
    html: `
      <div data-testid="testattr"><div><span>GBP 0.50</span></div></div>

    `,
    test: `
     
    cy.contains ('[data-testid=testattr]', 'GBP 0.50');
    cy.get('[data-testid=testattr]')
        .filter(':contains("GBP 0.50")');
    `
  }
  
  it('tests contains without nbsp;', () => {
    cy.runExample(helloTest)
  })