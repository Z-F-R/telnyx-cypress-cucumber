@regression
Feature: Homepage

  @smoke @TC-001
  Scenario: Homepage loads successfully
    When I open the Telnyx homepage
    Then I should be on the homepage

  @TC-002
  Scenario: Logo navigates to the homepage
    Given I open the pricing page
    And the Telnyx logo is visible in the header
    When I click the Telnyx logo
    Then I should be on the homepage

  @TC-011
  Scenario: Homepage document title
    When I open the Telnyx homepage
    Then the page title should contain "Telnyx"
