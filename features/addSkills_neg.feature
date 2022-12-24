Feature: Admin Page Orange HRM

  Scenario Outline: Test tab qualifications >> add existing skills

    Given User on the login page
    When  User login with <usernameOHRM> and <passwordOHRM>
    Then  User validate title page <title>

    When User accesses Admin menu >> tab Qualifications >> submenu Skills
    And  User click button add skills
    And  User input existing skill name <existingskill>
    Then The system displays an error message saying <error_message>

    Examples:
      | usernameOHRM | passwordOHRM     | title         | existingskill    | error_message             |
      | Admin        | admin123         | Dashboard     | JavaScript       | Already exists            |