describe("GET /api/customers", () => {
    it("Gets a list of customers", () => {
      cy.request("GET", "/api/customers").then((response) => {
        expect(response.status).to.eq(200)
      })
    })
  })