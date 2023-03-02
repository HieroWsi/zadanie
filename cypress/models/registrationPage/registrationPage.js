export default class registrationPage {
    selectors = {
      emailAdressInput: '[data-cy="username"]',
      passwordInput: '[data-cy="password"]',
      countrySelect: '[data-cy="country"]',
      hobbySelect: '[data-cy="hobby"]',
      saveButton: '[value="Save"]',
      choosenFileInput: '#photo',
      conditionCheckbox: '#registration-consent-<index>'
    };
  
    typeEmailAdress(emailAdress) {
      cy.get(this.selectors.emailAdressInput).should("be.visible").type(emailAdress);
    }
  
    typePassword(password) {
      cy.get(this.selectors.passwordInput).should("be.visible").type(password);
    }

    selectHobby(hobby) {
      cy.get(this.selectors.hobbySelect).should("be.visible").select(hobby);
    } 

    clickSaveButton() {
      cy.get(this.selectors.saveButton).should("be.visible").click();
    } 

    // Add test file from fixtures
    chooseFile(fileName){
      cy.fixture(fileName, { encoding: null }).as('testFile.png')
      cy.get(this.selectors.choosenFileInput).selectFile('@testFile.png', { force:true, action:'drag-drop' })
    }

    checkConditions(conditionIndex){
      const conditionCheckbox = this.selectors.conditionCheckbox.replace('<index>', conditionIndex)
      cy.get(conditionCheckbox).check()
    }

    validateSuccesMessage(message){
      cy.get('body').should('be.visible').and('have.text', message)
    }
}
  