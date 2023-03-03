describe("GET /api/customers/:d", () => {
  it("Gets customer by ID", () => {
    cy.request("GET", "/api/customers/1").then((response) => {
      assert.equal(200, response.status);
    });
  });
});
