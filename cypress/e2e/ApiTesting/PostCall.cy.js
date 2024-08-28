describe("Api Testing", ()=>{

    it('Approach 1 - Hard coded json object', ()=>{

        const requestBody={
            tourist_name: "Deepak",
            tourist_email: "deepak1@gmail.com",
            tourist_location: "India"
        }

        cy.request({
            method: 'POST',
            url: 'http://restapi.adequateshop.com/api/Tourist/',
            body: requestBody
        })
        .then( (response)=>{
            expect(response.status).to.eq(201)
            expect(response.body.tourist_name).to.eq("Deepak")
            expect(response.body.tourist_email).to.eq("deepak1@gmail.com")
            expect(response.body.tourist_location).to.eq("India")
        })

    })

    it.only('Approach 2 - Dynamically generate json object', ()=>{

        const requestBody={
            tourist_name: Math.random().toString(5).substring(2),
            tourist_email: Math.random().toString(5).substring(2)+"@gmail.com",
            tourist_location: "India"
        }

        cy.request({
            method: 'POST',
            url: 'http://restapi.adequateshop.com/api/Tourist/',
            body: requestBody
        })
        .then( (response)=>{
            expect(response.status).to.eq(201)
            expect(response.body.tourist_name).to.eq(requestBody.tourist_name)
            expect(response.body.tourist_email).to.eq(requestBody.tourist_email)
            expect(response.body.tourist_location).to.eq(requestBody.tourist_location)
        })

    })


})