Feature: I want to login into the site with valid and invalid data

  Background: 
    Given I navigate to the Website

  Scenario: Login as user with valid data
    When  I entered username "jan.testowy@wskz.pl"
    And   I entered password "aqLrvDJ348"
    And   User click on sign in button
    Then  Validate the title after login "Welcome back, jan.testowy@wskz.pl!"

  Scenario Outline: Login as user with invalid data
    When  I entered username "<username>"
    And   I entered password "<password>"
    When  User click on sign in button
    Then  Error message should display "Incorrect Username and/or Password!"
    Examples: 
      | username        | password |
      | sdf@yopmail.com | 1sad     |
      | com             | d        |
