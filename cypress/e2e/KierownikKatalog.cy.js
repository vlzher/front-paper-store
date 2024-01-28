describe('KierownikKatalog End-to-End Test', () => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', () => false);
    });
    it('should perform the desired actions', () => {
        cy.visit('http://127.0.0.1:5173/');
        // Click on the button with text "Kierownik - Zarzadzanie katalogiem"
        cy.contains('Kierownik - Zarzadzanie katalogiem').click();

        // Click on the button with text containing "dodaj"
        cy.contains('button', 'Dodaj').click();

        // Enter example data in all three inputs with id default-input
        cy.get('#default-input').type('Example Name');
        cy.get('#default-input1').type('Example Description');
        cy.get('#default-input2').type('15');
        // Click on the button with text "Dodaj pozycje"
        cy.contains('Dodaj pozycje').click();

        // Click on the button with text "Okay"
        cy.contains('Okay').click();

        // Click on the first div with classname "rounded bg-gray-300 p-2 w-full aspect-square flex flex-col items-center justify-center"
        cy.get('.rounded.bg-gray-300.p-2.w-full.aspect-square.flex.flex-col.items-center.justify-center').first().click();

        cy.contains('Edytuj').click();

        cy.get('#default-input').clear().type('example text');

        cy.get('#default-input1').clear().type('example description');

        cy.get('#default-input2').clear().type('50');

        cy.contains('Edytuj pozycję').click();

        // Click on the button with text "Okay"
        cy.contains('Okay').click();

        // Click on the first div with classname "rounded bg-gray-300 p-2 w-full aspect-square flex flex-col items-center justify-center"
        cy.get('.rounded.bg-gray-300.p-2.w-full.aspect-square.flex.flex-col.items-center.justify-center').first().click();

        // Click on the button with text "usuń"
        cy.contains('Usuń').click();

        // Click on the button with text "Tak"
        cy.contains('Tak').click();

        // Click on the button with text "Okay"
        cy.contains('Okay').click();

        // Click on the button with text "Powrót"
        cy.contains('Powrót').click();
    });
});
