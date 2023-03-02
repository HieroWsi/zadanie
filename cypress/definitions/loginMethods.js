import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../Pages/loginPage";

const login = new LoginPage();

Given("I navigate to the Website", () => {
  cy.visit("/");
});

When("User click on sign in button", () => {
  login.clickSignInButton();
});

When("I entered username {string}", username => {
    login.typeUsername(username);
});

When("I entered password {string}", password => {
  login.typePassword(password);
});

When("Login as user", () => {
  login.signIn();
  cy.url().should('include', '/home')
});

Then("Validate the title after login {string}", (title) => {
  login.verifyPageTitle(title);
});

Then("Error message should display {string}", (errorMessage) => {
    login.validateErrorMessage(errorMessage);
});
