export default class MainPage {
  selectors = {
    usernameInput: "#username",
    forStudentItem: "#comp-ils2cgqy2label",
    dropdownMenuContainer: "#comp-ils2cgqymoreContainer",
    studentCouncilLink: "#comp-ils2cgqymoreContainer11",
    languagesDropdownContainer: '[data-testid="languages-dropdown-handle-container"]',
  };

  waitUntilPageElementsLoad() {
    cy.get(this.selectors.languagesDropdownContainer).should("be.visible");
  }

  clickForStudentItem() {
    this.waitUntilPageElementsLoad();
    cy.get(this.selectors.forStudentItem).should("be.visible").click();
    cy.get(this.selectors.dropdownMenuContainer).should("be.visible");
  }

  clickStudentCouncilLink() {
    cy.get(this.selectors.studentCouncilLink).click();
    cy.url().should("include", "/samorzad-studencki");
  }
}
