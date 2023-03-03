Feature: I want to login into the site with valid and invalid data

  Background: 
    Given I navigate to the new-page

  Scenario Outline: Login as user with valid data
    When  I click 'Click me!' link
    And   I click 'For student' menu item
    And   I click 'Student Council' link
    Then  I displayd students data