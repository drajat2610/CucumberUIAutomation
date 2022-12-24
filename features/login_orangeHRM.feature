Feature: Login Page Orange HRM

  Scenario Outline: Test login form

    Given User on the login page
    When User login with <usernameOHRM> and <passwordOHRM>
    Then User validate title page <title>

    Examples:
      | usernameOHRM | passwordOHRM        | title                        |
      | Admin        | admin123            | Dashboard                    |