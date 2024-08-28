

describe('Alerts', () => {
    it('JS Alert', () => {

      cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
      cy.get("button[onclick='jsAlert()']").click()

      cy.on('window:alert', (t)=>{
        expect(t).to.contains('I am a JS Alert')
      })

      //Alert window automatically closed by cypress
      cy.get('#result').should('have.text', 'You successfully clicked an alert')
      
    })

    it('JS confirm Alert - OK ', () => {

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()
  
        cy.on('window:confirm', (t)=>{
          expect(t).to.contains('I am a JS Confirm')
        })
  
        //Alert window automatically closed by cypress by clicking ok button by default
        cy.get('#result').should('have.text', 'You clicked: Ok')
        
      })

      it('JS confirm Alert - cancel ', () => {

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()
  
        cy.on('window:confirm', (t)=>{
          expect(t).to.contains('I am a JS Confirm')
        })
  
        cy.on('window:confirm', ()=> false) //cypress close alert
        cy.get('#result').should('have.text', 'You clicked: Cancel')
        
      })

      it('JS prompt Alert', () => {

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.window().then((win)=>{
            cy.stub(win, 'prompt').returns('welcome')
        })

        cy.get("button[onclick='jsPrompt()']").click()
        cy.get('#result').should('have.text', 'You entered: welcome')
        
      })

      it('Authentication Alert', () => {

        //Approach 1

        cy.visit("https://the-internet.herokuapp.com/basic_auth", {auth: {username: "admin", password: "admin"}})

        cy.get("div[class='example'] p").should('have.contain', 'Congratulations')
        
      })

      it.only('Authentication Alert', () => {

        //Approach 2

        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")

        cy.get("div[class='example'] p").should('have.contain', 'Congratulations')
        
      })
  })