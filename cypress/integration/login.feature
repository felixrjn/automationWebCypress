    @Login

Feature: log in feature

As user, I should be able to log in

@Positive
Scenario: log in email
    Given I go to Web php travels login
    When I click login button
    When I fill username field
    And I fill password field
    And I submit login button
