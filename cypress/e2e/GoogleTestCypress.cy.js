describe('Google Seach Test', () => {
    it('Search for a particular car', () => {
        cy.visit('https://www.google.com')
        cy.get('.gLFyf').type('Subaru Outback')
        cy.get("input[value='Google Search']").click({ multiple: true })
    })
})