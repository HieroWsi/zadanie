import { When } from "@badeball/cypress-cucumber-preprocessor";
import StudentCouncilPage from "./studentCouncilPage";

const studentCouncil = new StudentCouncilPage();

When("I displayd students data", () => {
  studentCouncil.getStudentsData();
});
