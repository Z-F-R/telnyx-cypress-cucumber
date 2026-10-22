@regression
Feature: Homepage

  Background:
    Given I open the Telnyx homepage

  @smoke @TC-001
  Scenario: Homepage loads successfully
    Then I should be on the homepage

  @TC-002
  Scenario: Logo is visible and navigates to the homepage
    Then the Telnyx logo should be visible and link to the homepage
    When I click the Telnyx logo
    Then I should be on the homepage

  @TC-011
  Scenario: Homepage document title
    Then the page title should contain "Telnyx"
