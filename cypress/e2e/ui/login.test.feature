Feature: I want to login into the site with valid and invalid data

  Background: 
    Given I navigate to the login page

  Scenario Outline: Login as user with valid data
    When  I entered username "<username>"
    And   I entered login password "<password>"
    And   User click on sign in button
    Then  Validate the title after login "Welcome back, <username>!"
    Examples: 
      | username            | password       |
      | jan.testowy@wskz.pl | aqLrvDJ348     |

  Scenario Outline: Login as user with invalid data: <username>, <password>
    When  I entered username "<username>"
    And   I entered login password "<password>"
    When  User click on sign in button
    Then  Error message should display "Incorrect Username and/or Password!"
    Examples: 
      | username        | password |
      | sdf@yopmail.com | 1sad     |
      | com             | d        |
