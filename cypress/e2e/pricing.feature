@regression
Feature: Pricing

  @smoke @TC-006
  Scenario: Pricing page opens from the header
    Given I open the Telnyx homepage
    When I open the "Pricing" header dropdown
    And I choose to view all pricing
    Then the URL should contain "/pricing"
    And the pricing page heading should be displayed

  @TC-007
  Scenario: Pricing plan sections are displayed
    Given I open the pricing page
    Then the following pricing sections should be displayed:
      | Pay as you go |
      | Growth        |
      | Enterprise    |
