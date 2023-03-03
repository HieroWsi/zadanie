import { When } from "@badeball/cypress-cucumber-preprocessor";

import MainPage from "./mainPage";

const main = new MainPage();

When("I click 'For student' menu item", () => {
  main.clickForStudentItem();
});

When("I click 'Student Council' link", () => {
  main.clickStudentCouncilLink();
});
