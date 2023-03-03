Feature: I want to verified registration form

  Background: 
    Given I navigate to the registration page

  Scenario Outline: Valid user registration
    When  I entered email address "<emialAdress>"
    And   I entered password "<password>"
    And   I selected hobby "<hobby>"
    And   I choosen file "<fileName>"
    And   I checked conditions "1"
    And   I checked conditions "2"
    And   I checked conditions "3"
    And   I clicked save button
    Then  Success message should display "Account created for: <emialAdress>"
    Examples:
    | emialAdress  | password | hobby | fileName |    
    | test@gml.com | 1234     | Books | test.png |    
