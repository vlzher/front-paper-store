describe('Your Test Suite Description', () => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', () => false);
    });
    it('should perform the specified actions', () => {
        // Visit the URL
        cy.visit('http://127.0.0.1:5173/');

        // Click on the button with text "Klient - Przegląd oferty"
        cy.contains('Klient - Przegląd oferty').click();

        // Input with type="search", enter "akt"
        cy.get('input[type="search"]').type('akt');

        // Check if div element with text "Zszywacz" does not exist
        cy.contains('Zszywacz').should('not.exist');

        // Check if item with text "Aktowka kierowcy" exists
        cy.contains('Aktowka kierowcy').should('exist');

        // Input with type range, scroll to 0, 50, and 100 percent
        cy.get('input[type="range"]').invoke('val', 0).trigger('input');
        cy.get('input[type="range"]').invoke('val', 50).trigger('input');
        cy.get('input[type="range"]').invoke('val', 100).trigger('input');

        // Find the first element with text "Do koszyka" and click
        cy.contains('Do koszyka').first().click();

        // Click on the image with alt="cart"
        cy.get('img[alt="cart"]').click();

        // Click on the button with text "Usunąć"
        cy.contains('Usunąć').click();

        // Click on the button with text "Złóż zamówienie"
        cy.contains('Złóż zamówienie').click();

        // Click on the button with text "Powrót"
        cy.contains('Powrót').click();
    });
});
