describe('Dropdown', () => {
    it.skip('Dropdown with select', () => {

        cy.visit("https://testautomationpractice.blogspot.com/")

        cy.get('#country').select('india').should('have.value', 'india')

    
    })

    it.skip('Dropdown without select', () => {

        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")

        cy.get('#select2-billing_country-container').click()
        cy.get("input[role='combobox']").type('india').type('{enter}')

        cy.get('#select2-billing_country-container').should('have.text', 'India')
    
    })

    it.skip('Auto suggested Dropdown', () => {

        cy.visit("https://www.wikipedia.org/")

        cy.get('#searchInput').type('delhi')
        cy.get('.suggestion-text').contains('Delhi University').click()
    })

    it('Dynamic suggestion', () => {

        cy.visit("https://www.google.com/")

        cy.get('#APjFqb').type('cypress automation')

        cy.wait(3000)

        cy.get('div.wM6W7d>span').should('have.length', 13)

        cy.get('div.wM6W7d>span').each( ($el, index, $list) => {
            if($el.text()=='cypress automation tool')
            {
                cy.wrap($el).click()
            }
        })
        
        cy.get('#APjFqb').should('have.value', 'cypress automation tool')
    
    })
  })