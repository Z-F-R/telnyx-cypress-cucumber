@regression
Feature: Authentication entry points

  Background:
    Given I open the Telnyx homepage

  @smoke @TC-004
  Scenario: Sign up opens the registration page
    When I click the Sign up link in the header
    Then the URL should contain "/sign-up"
    And the page heading should contain "Create your account"

  @smoke @TC-005
  Scenario: Log in opens the Telnyx portal
    Then the Log in link should point to "https://portal.telnyx.com"
    When I click the Log in link in the header
    Then the Telnyx portal sign in page should be opened
