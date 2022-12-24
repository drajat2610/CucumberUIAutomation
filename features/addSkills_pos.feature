Feature: Admin Page Orange HRM

  Scenario Outline: Test tab qualifications >> add new skills

    Given User on the login page
    When User login with <usernameOHRM> and <passwordOHRM>
    Then User validate title page <title>

    When User accesses the skills menu page
    And User click button add
    And User input skill name <skillname> and description <description>
    Then User should see a flash message saying <successmessage>

    Examples:
      | usernameOHRM | passwordOHRM     | title         | skillname | description                   | successmessage            |
      | Admin        | admin123         | Dashboard     | Cypress   | UI automation testing with JS | Successfully Saved        |