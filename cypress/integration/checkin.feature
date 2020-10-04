        @Checkin
Feature: Searching feature works

As user, I should be able search hotel

@PositiveTesting
Scenario: search hotel in Bandung
    Given I go to Web php travels
    When I fill destination field
    And I chose chekin date
    And I chose checkout date
    And I chose guest 
    And I submit form search