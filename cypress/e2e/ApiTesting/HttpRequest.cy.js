describe("Http Request", ()=>{

    it("Get call", ()=>{

        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1')
        .its('status')
        .should('equal', 200)
    })

    it("Post Call", ()=>{

        cy.request( {method: 'POST', url: "https://jsonplaceholder.typicode.com/posts/", 
            body: {
                     title: 'foo',
                     body: 'bar',
                     userId: 1,
          }})

    .its('status')
    .should('equal', 201)

    })

    it("Put Call", ()=>{

        cy.request( {method: 'PUT', url: "https://jsonplaceholder.typicode.com/posts/1", 
            body: {
                     title: 'foo',
                     body: 'bar',
                     userId: 1,
                     id: 1
          }})

    .its('status')
    .should('equal', 200)

    })

    it('Delete Call', ()=>{

        cy.request('DELETE', "https://jsonplaceholder.typicode.com/posts/1")
        .its('status')
        .should('equal', 200)
    })


})