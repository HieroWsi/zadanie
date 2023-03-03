export default class StudentCouncilPage {
  selectors = {
    studentDataContainer: '[role="listitem"]',
    studentsDataTextContainer: '[data-testid="richTextElement"] > p:last-child',
  };

  getStudentsData() {
    cy.get(this.selectors.studentDataContainer).each((el) => {
      cy.log(
        "Students:",
        el.find(this.selectors.studentsDataTextContainer).text()
      );
    });
  }
}
