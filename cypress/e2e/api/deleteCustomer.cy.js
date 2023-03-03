describe("DELETE /api/customers/id", () => {
  it("Remove customer", () => {
    cy.request("DELETE", "/api/customers/2", ).then((response) => {
      assert.equal(200, response.status);
      assert.equal('Usunięto klienta', response.body);
    });
  });
});
