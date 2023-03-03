export default class NewPage {
  selectors = {
    clickMeLink: '[href="https://www.wskz.pl"]',
  };

  clickMeLink() {
    cy.get(this.selectors.clickMeLink)
      .should("be.visible")
      .invoke("removeAttr", "target")
      .click();
  }
}
