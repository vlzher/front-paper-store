describe('Reklamacja Workflow', () => {
    it('should complete the reklamacja workflow', () => {
        // Visit the specified URL
        cy.visit('http://127.0.0.1:5173/');

        // Click on button with Text "Klient- Zlozenie reklamacji"
        cy.contains('Klient- Zlozenie reklamacji').click();

        // Click on button with text "Złóż reklamacje"
        cy.contains('Złóż reklamacje').click();

        // Click on button with Text "Tak"
        cy.contains('Tak').click();

        // Enter text in input with id "large-input"
        cy.get('#large-input').type('example text');

        // Click on button with text "Wyślij reklamacje"
        cy.contains('Wyślij reklamacje').click();

        // Click on button with Text "Tak"
        cy.contains('Tak').click();

        // Find input with id "text" and add text "Hello"
        cy.get('input[type="text"]').type('Hello');

        // Click button with text "wyślij"
        cy.contains('wyślij').click();

        // Clean input and add text "My"
        cy.get('input[type="text"]').clear().type('My');

        // Click button with text "wyślij"
        cy.contains('wyślij').click();

        // Clean input and add text "Friend"
        cy.get('input[type="text"]').clear().type('Friend');

        // Click button with text "wyślij"
        cy.contains('wyślij').click();

        // Click on button with text "Powrót"
        cy.contains('Powrót').click();

        // Click on button with text "Powrót"
        cy.contains('Powrót').click();

        // Click on button with text "Pracownik - Obsluga reklamacji"
        cy.contains('Pracownik - Obsluga reklamacji').click();

        // Click on div with classname "my-2 p-10 bg-gray-800 rounded w-3/4 h-48 flex justify-between items-center p-5 cursor-pointer"
        cy.contains('Opis: ').click();

        // Find input with id "text" and add text "hello"
        cy.get('input[type="text"]').type('hello');

        // Click button with text "wyślij"
        cy.contains('wyślij').click();

        // Add text "my"
        cy.get('input[type="text"]').type('my');

        // Click button with text "wyślij"
        cy.contains('wyślij').click();

        // Add text "bro"
        cy.get('input[type="text"]').type('bro');

        // Click button with text "wyślij"
        cy.contains('wyślij').click();

        // Find the button with text "Akceptuj reklamacje"
        cy.contains('Akceptuj reklamacje').click();

        // Click on button with text "Powrót"
        cy.contains('Powrót').click();

        // Click on button with Text "Klient- Zlozenie reklamacji"
        cy.contains('Klient- Zlozenie reklamacji').click();

        // Click on div with text "Szczegóły reklamacji"
        cy.contains('Szczegóły reklamacji').click();

        // Click on button with text "Powrót"
        cy.contains('Powrót').click();

        // Click on button with text "Powrót"
        cy.contains('Powrót').click();
    });
});
