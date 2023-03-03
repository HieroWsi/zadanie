import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import NewPage from "./newPage";

const newPage = new NewPage();

Given("I navigate to the new-page", () => {
  cy.visit("/new-page");
});

When("I click 'Click me!' link", () => {
  newPage.clickMeLink();
});
