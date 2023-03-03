describe("POST /api/customers", () => {
  it("Create customer", () => {
    cy.request("POST", "/api/customers", {
      body: {
        name: "TestName",
      },
    }).then((response) => {
      cy.log(response.body)
      assert.equal(200, response.status);
      assert.equal('Dodano klienta', response.body);
    });
  });
});
