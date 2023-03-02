export default class LoginPage {
  selectors = {
    usernameInput: '#username',
    passwordInput: '#password',
    loginButton: '[value="Login"]',
  };

  typeUsername(username) {
    cy.get(this.selectors.usernameInput).should("be.visible").type(username);
  }

  typeLoginPassword(password) {
    cy.get(this.selectors.passwordInput).should("be.visible").type(password);
  }

  clickSignInButton() {
    cy.get(this.selectors.loginButton).should("be.visible").click();
  }

  signIn() {
    this.typeUsername(Cypress.env("username"));
    this.typePassword(Cypress.env("password"));
    this.clickSignInButton();
  }

  verifyPageTitle(title){
    cy.get('body').should('be.visible').and('have.text', title)
  }

  validateErrorMessage(message){
    cy.get('body').should('be.visible').and('have.text', message)
  }
}
