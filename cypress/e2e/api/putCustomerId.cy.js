describe("PUT /api/customers", () => {
  it("Update customer name", () => {
    cy.request("PUT", "/api/customers/1", {
      body: {
        name: "TestName",
      },
    }).then((response) => {
      assert.equal(200, response.status);
      assert.equal('Zaktualizowano klienta', response.body);
    });
  });
});
