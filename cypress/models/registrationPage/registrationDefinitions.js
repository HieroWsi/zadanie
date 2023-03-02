import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import RegistrationPage from "./registrationPage";

const registration = new RegistrationPage();

Given("I navigate to the registration page", () => {
  cy.visit("/registration");
});

When("I entered email address {string}", (emailAdress) => {
  registration.typeEmailAdress(emailAdress);
});

When("I entered password {string}", (password) => {
  registration.typePassword(password);
});

When("I selected hobby {string}", (hobby) => {
  registration.selectHobby(hobby);
});

When("I choosen file {string}", (fileName) => {
  registration.chooseFile(fileName);
});

When("I checked conditions {string}", (conditionIndex) => {
  registration.checkConditions(conditionIndex);
});

When("I clicked save button", () => {
  registration.clickSaveButton();
});

Then("Success message should display {string}", (message) => {
  registration.validateSuccesMessage(message);
});
