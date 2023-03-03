describe("GET /api/customers", () => {
  it("Gets a list of customers", () => {
    cy.request("GET", "/api/customers").then((response) => {
      assert.equal(200, response.status);
    });
  });
});
