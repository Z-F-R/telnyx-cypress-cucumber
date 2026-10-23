@regression
Feature: Mobile navigation

  @smoke @TC-012
  Scenario: Mobile navigation menu opens
    Given I open the Telnyx homepage on a mobile device
    And the mobile menu is closed
    When I open the mobile menu
    Then the mobile menu should be open
