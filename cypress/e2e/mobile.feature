@regression
Feature: Mobile navigation

  @smoke @TC-012
  Scenario: Mobile navigation menu opens
    Given I open the Telnyx homepage on a 375x812 screen
    Then the mobile menu button should be visible
    And the mobile menu should be closed
    When I tap the mobile menu button
    Then the mobile menu should be open
