@regression
Feature: Authentication entry points

  Background:
    Given I open the Telnyx homepage

  @smoke @TC-004
  Scenario: Sign up opens the registration page
    When I start the sign up
    Then the URL should contain "/sign-up"
    And the sign up page heading should contain "Create your account"

  @smoke @TC-005
  Scenario: Log in opens the Telnyx portal
    Given the Log in link points to "https://portal.telnyx.com"
    When I go to log in
    Then the Telnyx portal sign in page should be opened
